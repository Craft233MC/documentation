# 常见问题🤔
在此查看一些经常被问到的问题的答案

如不包含，请向管理员提交反馈

## 我无法连接服务器了！
答: Craft233并非机房托管，动态公网ip会不定期重新拨号获取新ip。域名DNS同步新ip需要一定时间，请稍后再试

也可以尝试使用备用链接`mc2.craft233.top`连接，或者尝试指定ipv4/ipv6的连接方式

只需要`mc.craft233.top`最前面加上`v4.`或`v6.`即可
::: info
仅主连接地址支持指定连接协议
:::
服务器连接状态以[Craft233状态监测站](https://status.craft233.top)为主

## 为什么同一个用户名无法使用其他平台等账号登录？
答: MultiLogin不允许重名，会提示名称已占用。如果想要使用其他平台登录，请联系管理员链接uuid到原始账号

链接uuid不要求账号间使用同一个用户名

## 怎样更换皮肤
答: 在账号的对应渠道更换。基岩版直接在游戏内更换，Java版正版请在[minecraft.net](https://www.minecraft.net)登录自己的账号进行更改，LittleSkin账户请在LittleSkin后台更换

## 为什么我在LittleSkin上设置的皮肤在服务器内不显示
答: Minecraft原版只支持`64x64`分辨率的皮肤，而皮肤站可以上传`128x128`等其他分辨率的皮肤材质

请尝试更换其他皮肤

## 正版账号在登录时无法进入
如果显示`登入失效: 无效的会话(请尝试重启你的游戏)`，请尝试退出游戏，然后在启动器内`刷新账户`，然后再次尝试登录

如果出现如下的一些问题:
- `身份验证服务器目前处于宕机状态。请稍候再试，抱歉！`
- `暂时无法连接到认证服务器，请稍候再试。`
- `Error occourred while contacting login servers, are they down?`

先不要急，这不是Craft233服务器出问题了，而是微软认证服务器由于一些因素又双叒叕抽风了

您可以尝试:
- 多次尝试登录
- 手动更改DNS解析
- 使用游戏加速器
或使用我们的代理节点

如果要使用我们的代理节点，请在启动器的`Java参数`或者叫`JVM参数头`中添加以下内容
```
-Dminecraft.api.account.host=https://account.bugjump.neokoni.ink -Dminecraft.api.session.host=https://session.bugjump.neokoni.ink -Dminecraft.api.services.host=https://services.bugjump.neokoni.ink
```
::: warning
非正版登录玩家请不要添加，修改验证服务器api会导致外置登录失败
:::
