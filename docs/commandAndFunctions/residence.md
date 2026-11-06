---
order: 4
---

# 领地保护

`BetterResidence` 提供领地创建、子领地、权限组与区域管理。创建领地按方块数计费，每方块 1 金币。

适用子服务器：`Lights`

## 选择区域

手持木锄，左键与右键分别点击长方体的两个对角。选择过程中粒子显示区域范围：绿色表示可创建，黄色表示受数量或金币限制，红色表示与已有领地冲突。

## 创建与删除

- `/res create <领地名>` 用当前选区创建领地
- `/res remove` 删除所在领地，再次执行确认删除
- `/res rename <新领地名>` 重命名所在领地
- `/res setowner <玩家名>` 转让所在领地

领地名须匹配 `[A-Za-z0-9_-]{1,64}`。

在已有领地范围内重新选区后执行 `/res create <领地名>`，创建子领地。子领地最多嵌套 3 层。

## 领地成员

- `/res trust <玩家名> [权限组]` 将玩家加入领地，省略权限组时加入成员
- `/res trust <玩家名> 黑名单` 将玩家加入黑名单
- `/res untrust <玩家名>` 将玩家移出领地

## 领地权限

权限按权重判定：任何人（-1000）< 黑名单 < 访客（0）< 成员 < 所有者（1000）。玩家未加入权限组时视为访客。

- `/res set <权限> <权限组>` 设置该权限所需的最低权限组，需要领地管理权限
- `/res check <权限>` 查看当前领地内的自身权限与最低要求

默认规则下，成员可破坏、放置方块与方块交互；访客可进入、使用物品、飞行与丢弃/拾取物品；删除领地仅限所有者。

| 权限 | 说明 |
| --- | --- |
| `block.break` | 破坏方块 |
| `block.place` | 放置方块 |
| `block.interact` | 与方块交互 |
| `entity.damage` | 攻击实体 |
| `entity.interact` | 与实体交互 |
| `dropitem.throw` | 丢弃物品 |
| `dropitem.pickup` | 拾取物品 |
| `use` | 使用物品 |
| `fly` | 鞘翅飞行 |
| `admin` | 领地管理操作 |
| `admin.trust` | 信任或取消信任玩家 |
| `admin.removeclaim` | 删除领地 |
| `admin.subclaim` | 创建子领地 |

权限支持层级继承：`block` 表示全部方块操作，`*` 表示全部权限。权限可附加目标后缀，例如 `block.break:oak_log`、`block.interact:container`。目标组 `all` 表示全部目标，`container` 表示容器类方块。

```text
/res set block.break 成员
/res set block.place 成员
/res set block.interact 访客
/res set block.interact:container 成员
/res set fly 所有者
```

## 领地标志

- `/res flag <标志> [值]` 查看或设置领地标志
- `/res flaglist` 列出已保存的标志

## 查询领地

- `/res info [领地名]` 查看当前或指定领地信息
- `/res list [筛选] [页码|page:<页码>]` 分页列出领地

`/res list` 可用筛选：`user`、`radius`、`world`、`name`、`parent`。

## 领地传送

- `/res settp` 将当前领地的传送点设置为当前位置
- `/res tp <领地名>` 传送到领地传送点

传送前有 3 秒准备时间，期间移动会取消传送。

## 区域管理

一个领地可包含多个区域。

- `/res area add [领地名]` 用当前选区为领地追加区域
- `/res area remove` 删除当前位置所在区域
- `/res area list` 列出领地的全部区域
- `/res expand <方块数>` 按视角方向扩展所在区域
- `/res contract <方块数>` 按视角方向收缩所在区域

## 帮助

`/res help [页码]` 显示完整指令列表。
