---
order: 8
---

# 箱子商店

`QuickShop` 提供基于箱子的玩家商店。创建商店后，其他玩家点击箱子即可购买或出售物品。

适用子服务器：`Lights`

交易按成交价的 5% 收取交易税。

## 创建商店

面向箱子，手持要出售的物品执行：

```text
/qs create <价格>
```

箱子会登记为商店，物品与数量取自手持物品。

## 查找商店

- `/qs browse` 浏览全部商店
- `/qs find <物品名>` 按物品名搜索商店

## 修改商店

面向自己的商店执行：

- `/qs amount <数量>` 修改单次交易数量
- `/qs price <价格>` 修改价格
- `/qs buy` 切换为收购模式
- `/qs sell` 切换为出售模式
- `/qs item` 将商店物品替换为手持物品
- `/qs sign` 切换告示牌样式
- `/qs toggledisplay` 切换商品展示实体的可见性

## 转让商店

- `/qs setowner <玩家名>` 设置商店所有者
- `/qs transferownership <玩家名>` 将面向的商店转让给玩家
- `/qs transferownership accept|deny` 接受或拒绝转让
- `/qs transferall <玩家名>` 转让自己的全部商店
- `/qs transferall accept|deny` 接受或拒绝全部转让

## 其他

- `/qs help` 显示指令帮助
- `/qs staff` 管理指令，需要管理权限
