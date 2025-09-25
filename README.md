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

