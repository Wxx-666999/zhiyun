# AGENTS.md

## 项目定位
智寓云居：智能公寓云管理平台。前端为企业官网（Vue 3 + Vite），后端为 Django 6.1 + SimpleUI 中文后台（API 规划中）。

## 技术栈与结构
- 前端：Vue 3 / Vue Router / Vite（`frontend/`），5 个页面：首页、用户社区、房源、联系、定制
- 后端：Python 3.12 / Django 6.1 / SimpleUI / SQLite，业务应用 `devices/`
- 项目配置：`zhuyun/`，URL 目前仅 `/admin/`
- 设计文档：`docs/superpowers/specs/2026-08-08-vue-frontend-design.md`
- 静态原型：`apt_tuya_dom.html`（涂鸦设备界面，作前端参考）

## 常用命令
- 前端（frontend/ 下）：
  - `npm run dev` → http://localhost:5173/（热更新）
  - `npm run build` → 产物输出到 `frontend/dist/`
- 后端（项目根目录）：
  - 激活虚拟环境：`.venv\Scripts\Activate.ps1`
  - `python manage.py runserver` → 127.0.0.1:8000（含 `/admin/`）

## 既定架构
- Django 只承担 API 与 `/admin/` 后台；企业官网前台由 `frontend/` 的 Vue 应用提供
- 开发联调：Vite（5173）代理 `/api` → Django（8000）
- 后续接入 Django REST Framework 提供 `/api/` 接口

## 前端设计约定
- 风格：高端轻奢 / 现实质感 / 低动效；色板为白色为主 + 墨色 + 墨玉绿；全站无圆角（见 `frontend/src/styles/main.css` 令牌）
- 图片：使用 Unsplash 远程图片（`images.unsplash.com`），新增图片保持同源风格
- 表单为纯前端示例，提交仅展示反馈，未对接后端

## 注意事项
- 超级管理员已存在：用户名 `xxl`；密码等凭据只存放在用户处，不入库
- 后台进程以 `--noreload` 运行时，修改 `settings.py` 等配置后需重启进程生效
- `.venv/`、`db.sqlite3`、`frontend/node_modules/`、`frontend/dist/` 已加入 `.gitignore`