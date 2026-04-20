// 文章详情页逻辑 - 加载并渲染Markdown
document.addEventListener('DOMContentLoaded', async function() {
    const articleDetail = document.getElementById('articleDetail');
    const tocNav = document.getElementById('tocNav');
    const articleToc = document.getElementById('articleToc');

    // 从URL参数获取文章ID
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (!articleId) {
        articleDetail.innerHTML = '<div class="error">未找到文章</div>';
        return;
    }

    // 获取文章信息
    const article = getArticleById(articleId);

    if (!article) {
        articleDetail.innerHTML = '<div class="error">文章不存在</div>';
        return;
    }

    try {
        // 加载Markdown文件
        const response = await fetch(article.file);

        if (!response.ok) {
            throw new Error('无法加载文章');
        }

        const markdown = await response.text();

        // 使用marked库渲染Markdown
        const htmlContent = marked.parse(markdown);

        // 显示文章
        articleDetail.innerHTML = `
            <h1>${article.title}</h1>
            <div class="meta">发布时间：${article.date}</div>
            <div class="markdown-content">${htmlContent}</div>
        `;

        // 生成目录
        generateTOC();

        // 更新页面标题
        document.title = `${article.title} - 我的博客`;

    } catch (error) {
        console.error('加载文章失败:', error);
        articleDetail.innerHTML = '<div class="error">加载文章失败，请稍后重试</div>';
    }
});

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
