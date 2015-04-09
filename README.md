# Push RSS Feed to Wechat

##Step1 申请企业号

##Step2 企业号后台获取corpID
侧边栏：设置

##Step3 获取Secret
设置>权限管理>分组>开发者凭据

##Step4 get AccessToken
在[接口调试工具](http://qydev.weixin.qq.com/debug) 
获取AccessToken

```
建立连接：获取AccessToken
请求地址： https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=wx3412f502e6a35c42&corpsecret=Yc4PJr25b3BYSE6kWNUYgYBW7l-ICBcNs9weUSdZPz6d-UMmRLo6cYFZRVpRXWl1
返回结果： HTTP/1.0 200 OK
Connection: keep-alive
Content-Type: application/json; charset=utf-8
Content-Length: 101
 {"access_token":"ZjeBxE9nFuAjGhTRoco1knrJlkmGHy40Doidm2taHChssPQUZ8fBtIr7sdQjBvr1","expires_in":7200}
 ```

##Step5 保存开发者凭据
设置> 新建管理组 > 页面底部获取

##Step6 新建应用 && 记录应用ID
应用中心新建后产生ID

##Step7 分组提权
设置> 权限管理 里，提升通讯录权限，应用权限.

##Step8 express <project_name>

##Step9 npm install webot-enterprise-api --save
要用到 API.send(to, message, callback);

##done
##Step5 回调模式开启
在**应用中心**新建立项目，之后关闭主动模式，开启回调


##Step6 配置config.js
```js
config.js
module.exports = { 
    corpid: 'wx3412f502e6a35c42',
    corpsecret: 'Yc4PJr25b3BYSE6kWNUYgYBW7l-ICBcNs9weUSdZPz6d-UMmRLo6cYFZRVpRXWl1',
    token: 'hackthon',
    encodingAESKey: 'FpqVmn7klmiHYGgF6NrAxOPcHX13kHKumrfVuep1L6y'
};

```

# pushfeedtowechat
