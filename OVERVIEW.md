# iframe 多级嵌套架构改造完成

## 改造概述

将危化品安全管控平台从 **单级 iframe 架构** 重构为 **三级 iframe 嵌套架构**：

```
index.html (topbar + L1菜单 + iframe)
  └── dashboard.html (L2菜单 + iframe)
        └── dashboard/overview.html (总览大屏内容)
  └── ai-staff.html (L2菜单 + iframe)
        └── ai-staff/market.html (智能体市场内容)
  └── workspace.html (无L2，内容直接展示)
  └── knowledge/experts/connector/news/settings ... (L2框架 + iframe)
```

## 新建文件清单

### CSS (1个)
- `css/l2-frame.css` — L2框架通用样式（l2-container、sidebar-l2、l2-content）

### 三级页面 (42个)

| 模块 | 目录 | 有内容迁移 | 空白占位 |
|------|------|-----------|---------|
| 数据大屏 | pages/dashboard/ | overview.html | map, alarm-center, device-monitor, emergency, statistics |
| 数字员工 | pages/ai-staff/ | market.html | alarm-diag, abnormal-diag, risk-assess, fault-predict, leak-sim, emergency-decision, report-gen |
| 知识库 | pages/knowledge/ | company.html | project, department, personal, shared, ai-analysis |
| 专家智库 | pages/experts/ | regulations.html | standards, checklist, hazards, cases, qa, encyclopedia |
| 连接器 | pages/connector/ | dcs.html | video, positioning, gds, sis, work-permit |
| 安全资讯 | pages/news/ | all.html | accidents, policies, industry, tech |
| 设置 | pages/settings/ | users.html | roles, system, logs, backup |

### 修改文件 (9个)
- `index.html` — 删除L2导航，简化为topbar+L1菜单+iframe
- `css/layout.css` — 删除sidebar-l2样式块
- `css/variables.css` — 已正确（无语法错误）
- `pages/workspace.html` — 已正确（position:absolute，无需修复）
- `pages/dashboard.html` → 改造为L2框架页
- `pages/ai-staff.html` → 改造为L2框架页
- `pages/knowledge.html` → 改造为L2框架页
- `pages/experts.html` → 改造为L2框架页
- `pages/connector.html` → 改造为L2框架页
- `pages/news.html` → 改造为L2框架页
- `pages/settings.html` → 改造为L2框架页

## 架构特点
- 所有页面可直接在浏览器打开，无需启动服务
- L2框架统一引入 `css/l2-frame.css`，内置菜单渲染和折叠逻辑
- 三级页面CSS路径统一为 `../../css/`
- 空白占位页统一样式：`&#128679;` + "功能开发中，敬请期待..."
