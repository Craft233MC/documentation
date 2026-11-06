---
order: 11
---

# Light系插件

Light 系列插件由 Craft233 自行编写，面向 Paper 与 Folia 平台，保持开源。

适用子服务器：`Lights`

## LightChainBreak

连锁破坏插件。单次最多连锁 64 个方块，支持四个连锁组：

| 连锁组 | 工具 | 方块 |
| --- | --- | --- |
| 矿物 | 镐 | 各类矿石、远古残骸、荧石 |
| 原木 | 斧 | 各类原木与菌柄 |
| 树叶 | 剪刀 | 各类树叶 |
| 疣块 | 锄 | 下界疣块、诡异疣块 |

- `/lcb toggle` 开启或关闭连锁
- `/lcb toggle display-count` 切换连锁数量提示
- `/lcb toggle item-protective` 切换物品保护
- `/lcb toggle sneak-enable` 切换潜行时启用

## LightSuicide

结束当前角色的生命并返回重生点。不死图腾不会生效。

- `/suicide` 自杀
- `/sui`、`/zisha`、`/自杀` 同上

部分游戏模式下不可使用。

## LightAntiCreeper

苦力怕爆炸时播放烟花效果，不破坏地形。

管理指令：`/lac`，需要管理权限。

## LightUtils

服务器工具集，包含自由视角等功能。

- `/freecam` 开启或关闭自由视角
