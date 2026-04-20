# 欢迎来到我的博客

感谢您访问我的个人博客！这是第一篇文章，让我来介绍一下这个博客系统。

## 博客特点

这个博客系统具有以下特点：

- **纯前端实现**：无需后端服务器，可以直接部署在GitHub Pages上
- **Markdown支持**：文章使用Markdown格式编写，简单易用
- **按需加载**：只有打开文章详情页时才加载Markdown文件，首页不加载任何文章内容
- **响应式设计**：完美适配桌面和移动设备

## 技术栈

本博客使用以下技术：

1. **HTML5** - 页面结构
2. **CSS3** - 样式设计
3. **JavaScript** - 交互逻辑
4. **Marked.js** - Markdown解析库

## 如何使用

### 添加新文章

要添加新文章，只需：

1. 在 `articles/` 目录下创建新的 `.md` 文件
2. 在 `js/config.js` 中添加文章配置信息
3. 刷新页面即可看到新文章

### 部署到GitHub Pages

```bash
# 1. 创建GitHub仓库
# 2. 推送代码
git init
git add .
git commit -m "初始化博客"
git remote add origin your-repo-url
git push -u origin main

# 3. 在GitHub仓库设置中启用GitHub Pages
# 4. 选择main分支作为源
```

## 代码示例

这里是一些代码示例：

```javascript
// 获取文章列表
const articles = getArticleList();
console.log(`共有 ${articles.length} 篇文章`);
```

```css
.article-card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

## 表格示例

| 功能 | 状态 | 说明 |
|------|------|------|
| Markdown渲染 | ✅ | 支持完整的Markdown语法 |
| 响应式设计 | ✅ | 适配各种设备 |
| 按需加载 | ✅ | 优化性能 |

## 引用示例

> 这是一个简单的博客系统，适合个人使用。
>
> —— 作者

## 结语

希望这个博客系统能满足你的需求！如果有任何问题或建议，欢迎反馈。

---

*最后更新：2024年1月15日*
