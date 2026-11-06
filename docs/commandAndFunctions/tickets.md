---
order: 9
---

# 议题追踪

`LightTickets` 将游戏内反馈同步至 [Craft233 议题追踪器](https://issues.craft233.cn)。议题、评论与状态与网页端共用同一账号。

## 注册与绑定

- `/lit register` 生成注册链接，通过该链接完成注册后自动绑定当前游戏账号
- `/lit bind` 为已有账号生成绑定码，在网页端登录后输入绑定码完成绑定
- `/lit account` 查看当前绑定的账号信息

绑定码有时效限制，过期后重新执行指令获取。

## 创建议题

- `/lit ticket create` 选择模板并创建议题
- `/lit ticket list` 列出自己的议题
- `/lit ticket info <编号>` 查看议题详情
- `/lit ticket comment <编号>` 提交评论

创建议题时按提示选择模板并填写字段，输入 `cancel` 可随时取消。

## 变更状态

`/lit ticket status <编号>` 变更议题状态，需要工作人员权限。

## 解绑

解绑需在 [Craft233 议题追踪器](https://issues.craft233.cn) 网页端完成，游戏内不提供解绑指令。
