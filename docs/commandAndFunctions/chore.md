---
order: 10
---

# 杂项功能

## 坐下与动作

`GSit` 提供坐下、躺下、爬行等动作。

适用子服务器：`Lobby`、`Lights`

- `/sit`、`/gsit` 坐下
- `/lay`、`/glay` 躺下
- `/bellyflop`、`/gbellyflop` 趴下
- `/spin`、`/gspin` 旋转
- `/crawl`、`/gcrawl` 爬行

再次执行对应指令或移动可起身。

## 方块查询

`CoreProtect` 记录方块与容器操作。

适用子服务器：`Lights`

- `/co i` 切换查询模式
- `/co` 显示帮助

开启查询模式后点击方块，查看该位置的交互记录。

## 帽子

`Hat` 将手持物品戴到头部。

适用子服务器：`Lights`

- `/hat` 将手持物品设为头盔

## 史莱姆区块

`GreenChunk` 用于查询史莱姆区块。

适用子服务器：`Lights`

- `/slime` 查询当前区块是否为史莱姆区块
- `/slimemap` 打开附近的史莱姆区块地图

## 本地时间与天气

`Scene4U` 为单个玩家设置客户端时间与天气，不影响服务器环境与其他玩家。

适用子服务器：`Lights`

- `/scene set <clear|downfall|day|midnight|night|noon>`
- `/scene set <游戏刻>` 设置为指定时间刻
- `/scene clear` 恢复服务器默认时间与天气
- `/scene help` 显示帮助

## 自由视角

`LightUtils` 提供观察者模式的自由视角，切换时记录并返回原位置。切换点 200 格范围内无玩家时自动退出。

适用子服务器：`Lights`

- `/freecam` 开启或关闭自由视角

## 变身

`FeatherMorph` 提供生物形态变身。

适用子服务器：`Lights`

- `/morph` 打开形态选择界面
- `/morph <形态>` 变身为指定形态
- `/unmorph` 解除变身
- `/play-action` 播放当前形态的动作，需要客户端 mod 才能看到动画

## 视距

`SeeMore` 按客户端设置动态调整玩家视距，无需手动操作。
