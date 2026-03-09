/**
 * Roc Blog - 文章详情页 JavaScript
 */

// 文章索引配置（与 main.js 保持一致）
const ARTICLES_INDEX = [
    {
        id: 'why-tools-matter',
        title: '为什么工具选择关乎效率成败',
        excerpt: '在信息爆炸的时代，选择合适的工具可能比努力本身更重要。本文探讨工具思维对个人和团队效率的深远影响。',
        category: '效率思维',
        date: '2026-03-09',
        path: '2026/03/why-tools-matter.md',
        emoji: '🧠',
        readTime: '5 分钟'
    },
    {
        id: 'tapsave-guide',
        title: 'TapSave 工具平台使用指南',
        excerpt: '详细介绍如何使用 TapSave 工具导航平台发现和筛选最适合你的工具，从注册到高级筛选技巧全覆盖。',
        category: '使用教程',
        date: '2026-03-08',
        path: '2026/03/tapsave-guide.md',
        emoji: '📖',
        readTime: '8 分钟'
    },
    {
        id: 'ai-tools-2026',
        title: '2026年最值得关注的 AI 工具清单',
        excerpt: 'AI 工具正在重塑我们的工作方式。本文整理了各领域最实用的 AI 工具，帮助你快速上手人工智能。',
        category: 'AI 工具',
        date: '2026-03-05',
        path: '2026/03/ai-tools-2026.md',
        emoji: '🤖',
        readTime: '10 分钟'
    },
    {
        id: 'design-tools-comparison',
        title: 'Figma vs Sketch vs Adobe XD：设计师工具选型指南',
        excerpt: '三大主流设计工具的深度对比，从协作能力、原型功能、插件生态等多维度分析，助你做出最佳选择。',
        category: '设计工具',
        date: '2026-03-01',
        path: '2026/03/design-tools-comparison.md',
        emoji: '🎨',
        readTime: '12 分钟'
    },
    {
        id: 'developer-productivity',
        title: '开发者效率提升：10个改变游戏规则的工具',
        excerpt: '精选能够显著提升开发效率的工具，涵盖代码编辑、版本控制、API测试、文档管理等各个环节。',
        category: '开发工具',
        date: '2026-02-25',
        path: '2026/02/developer-productivity.md',
        emoji: '⚡',
        readTime: '15 分钟'
    },
    {
        id: 'automation-workflow',
        title: '零代码自动化：用 Zapier 和 Make 搭建你的工作流',
        excerpt: '不需要编程知识也能实现工作自动化。学习如何使用零代码工具连接不同应用，节省重复劳动时间。',
        category: '自动化',
        date: '2026-02-20',
        path: '2026/02/automation-workflow.md',
        emoji: '🔧',
        readTime: '7 分钟'
    }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // 从 URL 获取文章 ID
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId) {
        loadArticle(articleId);
    } else {
        showError('未指定文章 ID');
    }
    
    // 绑定移动端菜单事件
    bindMobileMenu();
}

// 加载文章
async function loadArticle(articleId) {
    const article = ARTICLES_INDEX.find(a => a.id === articleId);
    const articleContent = document.getElementById('article-content');
    
    if (!article) {
        showError('文章不存在');
        return;
    }
    
    try {
        // 更新页面标题
        document.title = `${article.title} - Roc Blog`;
        
        // 加载 Markdown 内容
        const response = await fetch(article.path);
        if (!response.ok) {
            throw new Error('文章加载失败');
        }
        
        const markdown = await response.text();
        const htmlContent = marked.parse(markdown);
        
        // 渲染文章详情
        const formattedDate = formatDate(article.date);
        
        articleContent.innerHTML = `
            <header class="article-detail-header">
                <span class="article-category">${article.category}</span>
                <h1>${article.title}</h1>
                <div class="article-detail-meta">
                    <span>📅 ${formattedDate}</span>
                    <span>⏱️ ${article.readTime}阅读</span>
                    <span>🏷️ ${article.category}</span>
                </div>
            </header>
            <div class="article-detail-body">
                ${htmlContent}
            </div>
            <div class="article-detail-footer">
                <div class="backlinks-section">
                    <h3>🔥 抖音视频下载工具</h3>
                    <p>免费在线下载抖音视频，支持无水印高清下载，无需安装软件，操作简单快速。</p>
                    <a href="https://www.tapsave.net/zh/douyin/" target="_blank" rel="noopener noreferrer">
                        立即下载抖音视频
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M6 3L10.5 7.5L6 12" stroke="currentColor" stroke-width="1.5" fill="none"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
        
    } catch (error) {
        console.error('加载文章失败:', error);
        showError('文章加载失败，请稍后重试');
    }
}

// 显示错误信息
function showError(message) {
    const articleContent = document.getElementById('article-content');
    articleContent.innerHTML = `
        <div class="article-error">
            <h2>😕 ${message}</h2>
            <p>抱歉，无法加载文章内容。</p>
            <a href="index.html#articles" class="btn btn-primary">返回文章列表</a>
        </div>
    `;
}

// 绑定移动端菜单
function bindMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
}

// 日期格式化
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
