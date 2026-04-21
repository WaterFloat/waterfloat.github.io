// 文章详情页逻辑 - 加载并渲染Markdown
async function loadArticle() {
    const articleDetail = document.getElementById('articleDetail');
    const tocNav = document.getElementById('tocNav');
    const articleToc = document.getElementById('articleToc');

    // 从URL参数获取文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    console.log('文章ID:', articleId);

    if (!articleId) {
        articleDetail.innerHTML = '<div class="error">未找到文章</div>';
        return;
    }

    // 获取文章信息
    const article = getArticleById(articleId);
    console.log('找到的文章:', article);
    console.log('所有文章:', ARTICLES);

    if (!article) {
        articleDetail.innerHTML = '<div class="error">文章不存在</div>';
        return;
    }

    try {
        // 显示加载状态
        articleDetail.innerHTML = '<div class="loading">加载中...</div>';
        
        // 加载Markdown文件
        const response = await fetch(article.file);

        if (!response.ok) {
            throw new Error('无法加载文章');
        }

        const markdown = await response.text();

        // 使用marked库渲染Markdown
        const htmlContent = marked.parse(markdown);

        // 显示文章（不显示标题和发布时间，由Markdown文件自行控制）
        articleDetail.innerHTML = `
            <div class="markdown-content">${htmlContent}</div>
        `;

        // 修正图片路径 - 根据Markdown文件位置调整相对路径
        fixImagePaths(article.file);

        // 生成目录
        generateTOC();

        // 更新页面标题
        document.title = `${article.title} - 我的博客`;

    } catch (error) {
        console.error('加载文章失败:', error);
        articleDetail.innerHTML = '<div class="error">加载文章失败，请稍后重试</div>';
    }
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', loadArticle);

// 监听URL变化（用于单页应用导航）
window.addEventListener('popstate', loadArticle);

// 生成目录
function generateTOC() {
    console.log('开始生成目录...');
    const markdownContent = document.querySelector('.markdown-content');
    const tocNav = document.getElementById('tocNav');
    const articleToc = document.getElementById('articleToc');

    console.log('markdownContent:', markdownContent);
    console.log('tocNav:', tocNav);
    console.log('articleToc:', articleToc);

    if (!markdownContent || !tocNav) {
        console.log('找不到必要的元素');
        return;
    }

    const headings = markdownContent.querySelectorAll('h2, h3');
    console.log('找到的标题数量:', headings.length);
    console.log('标题列表:', headings);

    if (headings.length === 0) {
        console.log('没有标题，隐藏目录');
        articleToc.style.display = 'none';
        return;
    }

    const ul = document.createElement('ul');

    headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;

        if (heading.tagName === 'H3') {
            a.classList.add('toc-h3');
        }

        a.addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    tocNav.appendChild(ul);
    console.log('目录生成完成');
}

// 修正图片路径
function fixImagePaths(markdownFilePath) {
    const markdownContent = document.querySelector('.markdown-content');
    if (!markdownContent) return;

    // 获取Markdown文件所在的目录路径
    // 例如: 'articles/resources/9x-software-list.md' -> 'articles/resources/'
    const baseDir = markdownFilePath.substring(0, markdownFilePath.lastIndexOf('/') + 1);
    console.log('Markdown文件目录:', baseDir);

    // 处理所有图片
    const images = markdownContent.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        // 如果是相对路径（不以 http/https 或 / 开头）
        if (src && !src.startsWith('http://') && !src.startsWith('https://') && !src.startsWith('/')) {
            let cleanSrc = src;
            
            // 处理 ../ 向上目录的情况
            if (cleanSrc.startsWith('../')) {
                // 计算需要向上几级目录
                let currentDir = baseDir;
                while (cleanSrc.startsWith('../')) {
                    // 移除 ../
                    cleanSrc = cleanSrc.substring(3);
                    // 向上一级目录
                    currentDir = currentDir.substring(0, currentDir.lastIndexOf('/', currentDir.length - 2) + 1);
                }
                const newSrc = currentDir + cleanSrc;
                img.setAttribute('src', newSrc);
                console.log('图片路径修正(../):', src, '->', newSrc);
            } else {
                // 处理 ./ 或直接文件名的情况
                cleanSrc = cleanSrc.replace(/^\.\//, '');
                const newSrc = baseDir + cleanSrc;
                img.setAttribute('src', newSrc);
                console.log('图片路径修正(./):', src, '->', newSrc);
            }
        }
    });
}
