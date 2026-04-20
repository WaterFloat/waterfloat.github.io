// 首页逻辑 - 展示文章列表
document.addEventListener('DOMContentLoaded', function() {
    const articleList = document.getElementById('articleList');
    const articles = getArticleList();

    // 生成文章列表
    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.onclick = () => {
            window.location.href = `article.html?id=${article.id}`;
        };

        card.innerHTML = `
            <h2 class="article-title">${article.title}</h2>
            <div class="article-meta">发布时间：${article.date}</div>
            <p class="article-excerpt">${article.excerpt}</p>
        `;

        articleList.appendChild(card);
    });
});
