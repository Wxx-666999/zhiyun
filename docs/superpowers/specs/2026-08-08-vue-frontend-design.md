# Vue 前端替代 Django 原生前台 — 设计文档

- 日期：2026-08-08
- 状态：待审阅
- 关联项目：智寓云居（Django 6.1 + SimpleUI 后台）

## 目标

用 Vue 3 前端工程替代 Django 原生的默认前台页面，Django 转型为纯 API + 管理后台，实现前后端分离。

## 架构

- 前端：Vue 3 + Vite 独立工程（`frontend/` 目录），开发时独立启动，热更新。
- 后端：Django 6.1 提供 REST API（DRF）与 SimpleUI 后台（`/admin/`）。
- 联调：Vite dev server（5173）通过代理将 `/api` 请求转发到 Django（8000）。

## 目录结构

```
智寓云居/
├── frontend/               # Vue 3 + Vite 前端工程
│   ├── src/                # 视图、组件、路由、API 封装
│   ├── vite.config.js      # 代理 /api -> http://127.0.0.1:8000
│   └── package.json
├── zhuyun/                 # Django 项目配置（新增 /api/ 路由）
├── devices/                # 业务应用，提供 API 视图
└── requirements.txt        # 新增 djangorestframework、django-cors-headers
```

## 依赖

- 前端：vue@3、vite、vue-router@4、pinia（JavaScript 版，暂不启用 TypeScript）
- 后端：djangorestframework、django-cors-headers

## API 契约（首版最小）

- `GET /api/health/` → `{"status": "ok", "service": "zhuyun-api", "time": "<ISO时间>"}`
- 设备等业务 API 后续在 `devices` 应用内扩展。

## 开发工作流

1. 终端 1：`python manage.py runserver`（Django，127.0.0.1:8000）
2. 终端 2：`cd frontend && npm run dev`（Vite，localhost:5173）
3. 浏览器访问 http://localhost:5173/ ，前端 `/api/*` 请求自动代理到 Django。
4. `/admin/` 仍由 Django 直接提供（SimpleUI 中文后台）。

## 验收标准

- [ ] `npm run build` 构建成功
- [ ] `GET /api/health/` 返回 JSON
- [ ] 前端首页渲染成功，并能请求到后端数据（页面展示 API 状态）

## 不在本次范围

- 生产部署方案（构建产物托管方式）
- 用户认证/登录页（后续）
- 涂鸦（Tuya）设备对接业务逻辑（后续）
