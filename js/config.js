// 文章配置文件
// 每篇文章的元信息都在这里配置
const ARTICLES = [
    {
        id: 'about',
        title: '关于本站',
        date: '2024-01-20',
        excerpt: '欢迎来到我的个人博客！这是一个纯前端的静态博客系统，支持Markdown格式，按需加载，响应式设计...',
        file: 'articles/about/about.md'
    },
    {
        id: 'update-log',
        title: '更新日志',
        date: '2024-01-20',
        excerpt: '记录网站的功能更新和改进历史，包括导航系统、文章系统等功能的开发进度...',
        file: 'articles/update-log/update-log.md'
    },
    {
        id: 'resource-readme',
        title: '资源说明',
        date: '2024-01-20',
        excerpt: '本站提供各类复古Windows系统的资源下载，包括系统补丁、驱动程序、软件工具等...',
        file: 'articles/resources/resource-readme.md'
    },
    {
        id: '9x-software-list',
        title: '在Win9x上运行的软件',
        date: '2024-01-20',
        excerpt: '收录了可以在 Windows 95/98/ME 系统上运行的软件列表，包括浏览器、办公软件、多媒体工具等...',
        file: 'articles/resources/9x-software-list.md'
    },
    {
        id: 'welcome',
        title: '欢迎来到我的博客',
        date: '2024-01-15',
        excerpt: '这是我的第一篇博客文章，介绍了这个博客系统的特点和功能。这是一个纯前端的静态博客系统，支持Markdown格式的文章...',
        file: 'articles/welcome.md'
    },
    {
        id: 'javascript-tips',
        title: 'JavaScript 实用技巧分享',
        date: '2024-01-10',
        excerpt: '本文分享了一些在日常开发中非常实用的JavaScript技巧，包括数组操作、对象处理、异步编程等方面的内容...',
        file: 'articles/javascript-tips.md'
    },
    {
        id: 'css-layout',
        title: 'CSS 布局最佳实践',
        date: '2024-01-05',
        excerpt: '现代CSS布局技术让网页布局变得更加简单和灵活。本文介绍了Flexbox和Grid布局的使用方法和最佳实践...',
        file: 'articles/css-layout.md'
    }
];

// 获取文章列表（首页使用）
function getArticleList() {
    return ARTICLES;
}

// 根据ID获取文章信息
function getArticleById(id) {
    return ARTICLES.find(article => article.id === id);
}
