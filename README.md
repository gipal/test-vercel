# Vue3 + Express + MongoDB 一键运行模板
参见 docker-compose.yml，运行：`docker compose up -d --build`。
前端：http://localhost:5173  后端：http://localhost:4001

📌 Vue3 + Node.js + MongoDB 全栈示例项目

(Vue3 + Vite + Pinia + Vue Router + Element Plus + Axios + JWT + Node.js + Express + MongoDB)

🇨🇳 简介

这是一个开箱即用的 全栈示例架构，包含前后端代码和 Docker 一键部署配置。
适合作为学习 Vue3 全家桶 + Node.js + MongoDB 的入门模板，也可以直接改造为实际项目。

✨ 功能

用户注册 / 登录（JWT 鉴权）

Pinia 全局状态管理 + Axios API 封装

Vue Router 页面路由（登录保护）

UI 框架：Element Plus

后端 API：Express + Mongoose（MongoDB）

一键运行：Docker Compose

🚀 快速开始
方法一：使用 Docker 一键运行
docker compose up -d --build


启动后：

前端：http://localhost:5173

后端：http://localhost:4001/api

方法二：本地运行

后端：

cd server
cp .env.example .env   # 修改数据库连接
npm install
node src/index.js


前端：

cd client
cp .env.example .env   # 默认 VITE_API_BASE=http://localhost:4001/api
npm install
npm run dev

📂 项目结构
vue3-fullstack-oneclick/
├── client/     # Vue3 前端
│   ├── src/    # 页面、组件、Pinia store
│   └── .env.example
├── server/     # Node.js + Express 后端
│   ├── src/    # API 路由、JWT 中间件、MongoDB 模型
│   └── .env.example
└── docker-compose.yml

🛠️ 技术栈
前端

Vue 3 + Vite

Pinia（状态管理）

Vue Router

Element Plus（UI）

Axios（API 请求）

后端

Node.js + Express

MongoDB + Mongoose

JWT（登录鉴权）

📖 下一步可以做的

添加用户资料修改 / 头像上传

集成 AI API（DeepSeek / OpenAI）

部署到 Vercel（前端）+ Render/Heroku（后端）

📌 Vue3 + Node.js + MongoDB Fullstack Example

(Vue3 + Vite + Pinia + Vue Router + Element Plus + Axios + JWT + Node.js + Express + MongoDB)

🇬🇧 Overview

This is a ready-to-use fullstack boilerplate, including both frontend & backend code and a one-click Docker setup.
You can use it as a learning template or extend it into a production-ready project.

✨ Features

User registration & login (JWT authentication)

Pinia state management + Axios API wrapper

Vue Router (with auth guard)

UI: Element Plus

Backend API: Express + Mongoose (MongoDB)

One-click run: Docker Compose

🚀 Quick Start
Method 1: Run with Docker
docker compose up -d --build


Services:

Frontend: http://localhost:5173

Backend: http://localhost:4001/api

Method 2: Run locally

Backend:

cd server
cp .env.example .env
npm install
node src/index.js


Frontend:

cd client
cp .env.example .env
npm install
npm run dev

📂 Project Structure
vue3-fullstack-oneclick/
├── client/     # Vue3 frontend
│   ├── src/    # pages, components, Pinia store
│   └── .env.example
├── server/     # Node.js + Express backend
│   ├── src/    # API routes, JWT middleware, MongoDB models
│   └── .env.example
└── docker-compose.yml

🛠️ Tech Stack
Frontend

Vue 3 + Vite

Pinia (state management)

Vue Router

Element Plus (UI library)

Axios

Backend

Node.js + Express

MongoDB + Mongoose

JWT authentication

📖 Next Steps

Add profile editing / avatar upload

Integrate AI APIs (DeepSeek / OpenAI)

Deploy frontend on Vercel + backend on Render/Heroku

# Vue3 全栈一键部署项目

## 项目介绍

这是一个开箱即用的全栈示例架构，集成 Vue3 前端、Node.js + Express 后端与 MongoDB 数据库，并提供 Docker 一键部署配置。

## 技术栈

- 前端: Vue 3 + Vite + Pinia + Vue Router + Element Plus
- 后端: Node.js + Express + MongoDB (Mongoose)
- 部署: Docker Compose 一键部署
- 认证: JWT + bcrypt

## 本地开发

### 方法一：Docker 一键运行（推荐）
```bash
docker compose up -d --build
```

### 方法二：本地分别运行
```bash
# 启动后端
cd server
cp .env.example .env
npm install
npm run dev

# 启动前端（在另一个终端）
cd client
cp .env.example .env
npm install
npm run dev
```

## 自动化部署

本项目支持通过 GitHub Actions 自动部署到 Vercel（前端）和 Render（后端）。

### 配置步骤

1. 在 GitHub 仓库中设置以下 secrets：
   - `VERCEL_TOKEN`: Vercel 访问令牌
   - `VERCEL_ORG_ID`: Vercel 组织 ID
   - `VERCEL_PROJECT_ID`: Vercel 项目 ID
   - `RENDER_SERVICE_ID`: Render 服务 ID
   - `RENDER_API_KEY`: Render API 密钥

2. 将代码推送到 main/master 分支，GitHub Actions 会自动运行测试并部署到对应平台。

### 手动部署

#### 前端部署到 Vercel
1. 登录 Vercel 控制台
2. 创建新项目并连接到 GitHub 仓库
3. 设置根目录为 `client`
4. 部署项目

#### 后端部署到 Render
1. 登录 Render 控制台
2. 创建 Web Service 并连接到 GitHub 仓库
3. 设置根目录为 `server`
4. 添加环境变量：
   - `MONGO_URI`: MongoDB 连接字符串
   - `JWT_SECRET`: JWT 密钥
   - `JWT_EXPIRES_IN`: JWT 过期时间
   - `PORT`: 10000
5. 部署服务

## 环境变量配置

### 前端 (.env 文件)
```env
VITE_API_BASE=http://localhost:4001/api
```

### 后端 (.env 文件)
```env
PORT=4001
MONGO_URI=mongodb://localhost:27017/vue3_fullstack_demo
JWT_SECRET=change_me
JWT_EXPIRES_IN=2h
```

## 项目结构

```
.
├── client/              # 前端代码
│   ├── src/
│   │   ├── api/         # API 请求封装
│   │   ├── assets/      # 静态资源
│   │   ├── components/  # 组件
│   │   ├── layout/      # 布局组件
│   │   ├── router/      # 路由配置
│   │   ├── store/       # 状态管理
│   │   ├── views/       # 页面视图
│   │   └── App.vue      # 根组件
│   ├── index.html       # 入口 HTML
│   └── vite.config.js   # Vite 配置
├── server/              # 后端代码
│   ├── src/
│   │   ├── middleware/  # 中间件
│   │   ├── models/      # 数据模型
│   │   ├── routes/      # 路由
│   │   └── index.js     # 入口文件
│   └── .env.example     # 环境变量示例
├── docker-compose.yml   # Docker 配置
└── README.md            # 项目说明
```

## API 接口

### 认证相关
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录

### 用户相关
- `GET /api/users/profile` - 获取用户信息

## 注意事项

1. 本地运行时需要确保 MongoDB 服务可用
2. 生产环境请替换默认的 JWT 密钥
3. 建议使用 HTTPS 进行生产部署
