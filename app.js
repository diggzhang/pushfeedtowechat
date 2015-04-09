var _ = require('lodash');
var feed = require('feed-read');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/wechatpusher');

var config = require('./config');
var webchat = require('wechat-enterprise-api');
var api = new webchat(config.corpid, config.corpsecret, 10);


// define user schema
var pushFeedSchema = new Schema({
    title: String,
    link: String
});

// create model
var pushfeed = mongoose.model('pushfeed', pushFeedSchema);


// message send configure
// send to @all(alluser)
var to = {
    "touser": "@all"
}

// send message format
var message = {
    "msgtype": "news",
    "news": {
        "articles": [
            {
                "title": "Title",
                "description": "Description",
                "url": "URL",
                "picurl": "" // "http://i-store.qiniudn.com/RSbgrLMmjaDOieNPufTw.png"
            }
        ]
    },
    "safe": "0"
};

// feed list
feedList = [
    "http://dev.guanghe.tv/feed.xml",
    //"http://www.ruanyifeng.com/blog/atom.xml",
    //"https://github.com/blog.atom",
];

console.log('reading...')
feed(feedList, function (err, articles) {
    if (err) throw err;

    pushfeed.find({title: {$in: _.pluck(articles, 'title')}}, function (err, docs) {
        //console.log(articles);
        var toBePushed = _.reject(articles, function (x) {
            return _.chain(docs).pluck('title').include(x.title).value();
        });

        if (toBePushed.length <= 0) {
            console.log("no new feeds");
            process.exit(0);
        }


        toBePushed = _(toBePushed).forEach(function (i) {
            i.picurl = "", i.url = i.link, i.description = ""
        }).value();
        message.news.articles = toBePushed;
        pushfeed.create(toBePushed, function (err, docs) {
            if (err) throw err;
        });
        console.log(message.news.articles)

        api.send(to, message, function (err, data, res) {
            if (err) throw err;
            console.log("feed already pushed");
            process.exit(0);
        });
    });
});
