# Vue3 Fullstack Client

## 部署到 Vercel 的步骤

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. 确保设置以下配置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
   - 安装命令: `npm install`
   - 根目录: `client`

4. 添加环境变量:
   - `VITE_API_BASE` 设置为你的后端 API 地址

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```