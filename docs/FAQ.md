---
order: 3
---

# 常见问题🤔

本页列出连接、登录与客户端显示相关的常见问题。未覆盖的问题可通过 [议题追踪](/docs/commandAndFunctions/tickets) 提交。

## 无法连接服务器

`dir.mc.craft233.cn` 为直连地址，服务器使用动态公网 IP。重新拨号后，DNS 记录同步存在延迟。

处理方式：

1. 稍后重试。
2. 改用 `mc.craft233.cn`、`frp.mc.craft233.cn` 或 `frp-oversea.mc.craft233.cn`。
3. 查看 [Craft233 状态监测站](https://status.craft233.cn) 确认服务器在线状态。

## 客户端版本被拒绝

服务器接受 `1.21.x` 至 `26.2` 的 Java 版客户端。低于或高于该范围时，服务器列表会提示版本不兼容。

当前服务器版本为 `26.2`。高于该版本的客户端需等待服务器升级后才能进入。

## 同一游戏名无法登录其他平台

`MultiLogin` 不允许不同平台使用同一游戏名，重名时会提示名称已被占用。

需要改用其他平台登录时，联系管理员将该平台 UUID 链接到原账号。链接不要求两个平台使用相同游戏名。

## 正版账号登录时无法进入

若提示 `登入失效: 无效的会话(请尝试重启你的游戏)`，退出游戏，在启动器中刷新账户后重试。

若出现以下提示：

- `身份验证服务器目前处于宕机状态。请稍候再试，抱歉！`
- `暂时无法连接到认证服务器，请稍候再试。`
- `Error occurred while contacting login servers, are they down?`

该问题来自微软认证服务，与 Craft233 服务器无关。可尝试：

- 多次重试登录
- 更换 DNS
- 使用游戏加速器
- 使用认证代理节点

使用代理节点时，在启动器的 `Java 参数` 或 `JVM 参数` 中加入：

```text
-Dminecraft.api.account.host=https://account.bugjump.neokoni.ink -Dminecraft.api.session.host=https://session.bugjump.neokoni.ink -Dminecraft.api.services.host=https://services.bugjump.neokoni.ink
```

::: warning
LittleSkin 等外置登录账号不要添加该参数，修改验证服务器地址会导致外置登录失败。
:::

## 更换皮肤

在账号对应的渠道更换：

- 微软正版：登录 [minecraft.net](https://www.minecraft.net) 更换皮肤。
- LittleSkin：在 LittleSkin 后台更换皮肤。

## LittleSkin 皮肤在服务器内不显示

Minecraft 原版仅支持 `64x64` 分辨率的皮肤。皮肤站允许上传 `128x128` 等其他分辨率的材质，此类皮肤在服务器内不会显示。

改用 `64x64` 分辨率的皮肤。

## 聊天消息看不到

聊天按频道发送。默认频道仅对同一子服务器的玩家可见。

发送跨服消息有两种方式：

- `/g <消息>` 切换到跨服频道后发送
- `!<消息>` 直接将本条消息发送到跨服频道

频道说明见 [聊天与消息](/docs/commandAndFunctions/chat)。

## 家名无法使用中文

`HuskHomes` 的家名限制为 `[a-zA-Z0-9-_]`，最长 16 个字符。中文与空格无法作为家名。

## 领地创建失败

常见原因：

- 领地名不符合 `[A-Za-z0-9_-]{1,64}`
- 选区与已有领地重叠
- 金币不足，创建费用为每方块 1 金币
- 子领地嵌套超过 3 层

## 服务器重启后任务变化

个人任务与进度保存在内存中，服务器重启后重新抽取。已领取的金币不会回退。

## 听不到语音聊天

语音聊天需要客户端安装 `Simple Voice Chat` mod。未安装 mod 时无法收发语音，但可以正常游玩。

确认 mod 已加载、系统麦克风权限正常，并检查防火墙是否放行 UDP 流量。
