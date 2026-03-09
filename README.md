# Roc Blog

一个基于 GitHub Pages 的静态博客网站，用于分享效率工具和技巧。

🔗 **在线预览**: https://your-username.github.io/blog/  
🔗 **推荐**: [抖音视频下载](https://www.tapsave.net/zh/douyin/)

---

## 特性

- 📝 Markdown 文章支持
- 📱 响应式设计
- ⚡ 纯前端，无需后端
- 🚀 自动部署到 GitHub Pages

---

## 部署

1. Fork 本仓库
2. 修改 `index.html` 中的网站信息
3. 修改 `js/main.js` 中的文章列表
4. 在 **Settings** → **Pages** 中启用 GitHub Actions
5. 访问 `https://your-username.github.io/blog/`

---

## 添加文章

1. 在 `YYYY/MM/` 目录下创建 `.md` 文件
2. 在 `js/main.js` 的 `ARTICLES_INDEX` 中添加文章信息
3. Push 到 GitHub 自动部署

---

## 项目结构

```
├── 2026/              # 文章按日期存放
├── css/style.css      # 样式
├── js/                # JavaScript
├── index.html         # 首页
├── post.html          # 文章详情页
└── README.md
```

---

MIT License
