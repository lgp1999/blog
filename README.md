# Roc Blog - 技术博客

[![Deploy to GitHub Pages](https://github.com/your-username/blog/actions/workflows/deploy.yml/badge.svg)](https://github.com/your-username/blog/actions/workflows/deploy.yml)

一个美观专业的浅色主题静态博客网站，用于分享效率工具、技术教程和行业资讯。

🔗 **在线预览**: https://your-username.github.io/blog/

🔗 **推荐网站**: [TapSave](https://www.tapsave.net/)

---

## ✨ 特性

- 🎨 **现代美观** - 浅色主题设计，清新专业的视觉效果
- 📱 **响应式布局** - 完美适配桌面、平板和手机
- 📝 **Markdown 支持** - 博客内容使用 Markdown 编写，易于维护
- 📂 **按日期组织** - 文章按 `YYYY/MM/` 结构存放，方便管理
- 🔗 **SEO 友好** - 优化的 HTML 结构和元数据
- ⚡ **纯前端** - 无需后端，部署简单快速
- 🚀 **GitHub Pages** - 自动部署到 GitHub Pages

---

## 🚀 快速开始

### 1. Fork 本仓库

点击右上角的 "Fork" 按钮，将仓库复制到你的 GitHub 账号下。

### 2. 修改配置

编辑 `js/main.js` 中的 `ARTICLES_INDEX` 数组，替换为你自己的文章信息：

```javascript
const ARTICLES_INDEX = [
    {
        id: 'your-article-id',
        title: '文章标题',
        excerpt: '文章摘要...',
        category: '分类',
        date: '2026-03-09',
        path: '2026/03/your-article.md',
        emoji: '📝',
        readTime: '5 分钟'
    },
    // ...
];
```

### 3. 修改网站信息

编辑 `index.html`，更新以下内容：

- 网站标题 `<title>`
- 网站描述 `meta name="description"`
- Logo 和品牌名称
- 反链地址（将你的链接放在合作伙伴区域）

### 4. 启用 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. **Source** 选择 "GitHub Actions"
3. 等待几分钟后，访问 `https://your-username.github.io/blog/`

---

## 📝 添加新文章

### 1. 创建 Markdown 文件

在对应日期目录下创建 `.md` 文件：

```bash
2026/
├── 03/
│   ├── why-tools-matter.md
│   └── your-new-article.md    # 新文章
└── 02/
    └── another-article.md
```

### 2. 更新文章索引

在 `js/main.js` 中添加文章信息：

```javascript
{
    id: 'your-new-article',           // 唯一标识，用于 URL
    title: '文章标题',
    excerpt: '文章摘要，显示在首页卡片中...',
    category: '分类名称',
    date: '2026-03-10',               // 发布日期
    path: '2026/03/your-new-article.md',  // 文件路径
    emoji: '🚀',                      // 文章图标
    readTime: '8 分钟'                 // 预计阅读时间
}
```

### 3. 提交并推送

```bash
git add .
git commit -m "添加新文章: 文章标题"
git push
```

GitHub Actions 会自动部署更新。

---

## 📁 项目结构

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 部署配置
├── 2026/                       # 年份目录
│   ├── 03/                     # 月份目录
│   │   ├── why-tools-matter.md
│   │   ├── tapsave-guide.md
│   │   ├── ai-tools-2026.md
│   │   └── design-tools-comparison.md
│   └── 02/
│       ├── developer-productivity.md
│       └── automation-workflow.md
├── css/
│   └── style.css               # 样式文件
├── js/
│   ├── main.js                 # 首页 JavaScript
│   └── article.js              # 文章详情页 JavaScript
├── images/                     # 图片资源
├── index.html                  # 首页
├── post.html                   # 文章详情页模板
├── README.md                   # 本文件
└── CNAME                       # 自定义域名配置（可选）
```

---

## 🔗 反链设置

本博客主要用于增加 TapSave 的反向链接。以下是关键反链位置：

1. **导航栏** - 右上角 "访问 TapSave" 按钮（保留）
2. **英雄区域** - 主 CTA 按钮
3. **合作伙伴区域** - 主推卡片和推荐链接
4. **每篇文章底部** - "相关推荐" 区块
5. **页脚** - 推荐链接组

如需添加更多反链，编辑 `index.html` 中对应的区域。

---

## 🎨 自定义样式

### 修改颜色主题

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    --primary: #4F46E5;           /* 主色调 */
    --background: #0F172A;        /* 背景色 */
    --surface: #1E293B;           /* 卡片背景 */
    --text-primary: #F8FAFC;      /* 主要文字 */
    --text-secondary: #94A3B8;    /* 次要文字 */
    /* ... */
}
```

### 修改字体

在 `index.html` 的 `<head>` 中更改 Google Fonts 链接。

---

## 📱 图片资源

当前文章使用 emoji 作为封面图标。如需使用真实图片：

1. 将图片放入 `images/` 目录
2. 修改 `js/main.js` 中的文章数据，添加 `image` 字段
3. 修改 `createArticleCard` 函数使用图片而非 emoji

---

## 🌐 绑定自定义域名

### 1. 创建 CNAME 文件

在仓库根目录创建 `CNAME` 文件：

```
blog.yourdomain.com
```

### 2. 配置 DNS

在你的域名服务商处添加 CNAME 记录：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| CNAME | blog | your-username.github.io |

### 3. 启用 HTTPS

在 GitHub 仓库的 **Settings** → **Pages** 中，勾选 "Enforce HTTPS"。

---

## 🔧 本地开发

由于这是纯静态网站，你可以使用任何静态文件服务器进行本地预览：

### 使用 Python

```bash
# Python 3
python -m http.server 8000

# 访问 http://localhost:8000
```

### 使用 Node.js

```bash
npx serve .

# 访问 http://localhost:3000
```

### 使用 VS Code

安装 "Live Server" 插件，右键点击 `index.html` → "Open with Live Server"

---

## 🚀 部署状态

| 环境 | 状态 | 地址 |
|------|------|------|
| 生产环境 | ✅ 自动部署 | https://your-username.github.io/blog/ |

---

## 📄 许可证

MIT License

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

*本站推荐: [TapSave](https://www.tapsave.net/)*
