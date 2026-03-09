/**
 * Roc Blog - 主 JavaScript 文件
 * 功能：加载文章列表
 */

// 文章索引配置
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

// 状态管理
let currentArticles = [];
let displayedCount = 0;
const ARTICLES_PER_PAGE = 6;

// DOM 元素
const articleList = document.getElementById('article-list');
const loadMoreBtn = document.getElementById('load-more-btn');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    init();
});

function init() {
    // 按日期排序文章（最新的在前）
    currentArticles = [...ARTICLES_INDEX].sort((a, b) => 
        new Date(b.date) - new Date(a.date)
    );
    
    // 加载初始文章
    loadArticles();
    
    // 绑定事件
    bindEvents();
}

function bindEvents() {
    // 加载更多按钮
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadArticles);
    }
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // 导航链接平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// 加载文章列表
function loadArticles() {
    const toDisplay = currentArticles.slice(displayedCount, displayedCount + ARTICLES_PER_PAGE);
    
    if (displayedCount === 0) {
        articleList.innerHTML = '';
    }
    
    toDisplay.forEach(article => {
        const card = createArticleCard(article);
        articleList.appendChild(card);
    });
    
    displayedCount += toDisplay.length;
    
    // 如果没有更多文章，隐藏加载更多按钮
    if (displayedCount >= currentArticles.length) {
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// 创建文章卡片
function createArticleCard(article) {
    const card = document.createElement('article');
    card.className = 'article-card';
    
    const formattedDate = formatDate(article.date);
    
    card.innerHTML = `
        <div class="article-image">
            <span>${article.emoji}</span>
        </div>
        <div class="article-content">
            <div class="article-meta">
                <span class="article-category">${article.category}</span>
                <span>${formattedDate}</span>
            </div>
            <h3>${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-footer">
                <span class="read-more">阅读全文 →</span>
                <span class="read-time">${article.readTime}</span>
            </div>
        </div>
    `;
    
    // 点击跳转到文章详情页
    card.addEventListener('click', () => {
        window.location.href = `post.html?id=${article.id}`;
    });
    
    return card;
}

// 日期格式化
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 添加一些交互动画
function initAnimations() {
    // 滚动显示动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察所有卡片元素
    document.querySelectorAll('.article-card, .partner-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// 添加 CSS 动画类
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* 导航链接移动端样式 */
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 72px;
                left: 0;
                right: 0;
                background: var(--surface);
                border-bottom: 1px solid var(--border);
                box-shadow: var(--shadow-lg);
                padding: 20px;
                flex-direction: column;
                gap: 8px;
                transform: translateY(-100%);
                opacity: 0;
                pointer-events: none;
                transition: all 0.3s ease;
            }
            
            .nav-links.active {
                transform: translateY(0);
                opacity: 1;
                pointer-events: all;
            }
            
            .nav-links a {
                width: 100%;
                text-align: center;
            }
            
            .nav-links .btn-primary {
                margin-left: 0;
                margin-top: 8px;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    </style>
`);

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});
