# Push RSS Feed to Wechat

##Step1 申请企业号

##Step2 企业号后台获取corpID
侧边栏：设置 帐号信息

##Step3 开发者凭证
设置> 权限管理 > 新建管理组 > 页面底部 > 在应用权限内添加新建的应用 > 页面底部“开发者凭据”

##Step4 新建应用 && 记录应用ID
应用中心新建应用后，会有一个应用ID(Product ID)

##Step5 配置 config.js
```js
config.js
module.exports = { 
    corpid: 'corpid_here',
    corpsecret: 'secret_here',
};
```

##Step6 配置微信API,发送目标以及信息模板  app.js
```js
    // CorpID, Secret, Product ID
    var api = new webchat(config.corpid, config.corpsecret, 10);
```
```js
    //发送目标
    var to = {
        "touser":"@all"
    }

    //信息模板
    var message = {
       ......
    };
```
##Step7 配置订阅列表 app.js
```js
    feedList= [
        "http://foo.xml",
        "http://bar.atom"
    ]
```
