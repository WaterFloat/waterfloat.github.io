# CSS 布局最佳实践

现代CSS提供了强大的布局工具，让网页布局变得简单而灵活。

## Flexbox 布局

Flexbox是一维布局模型，适合处理行或列的布局。

### 基本用法

```css
.container {
    display: flex;
    justify-content: space-between; /* 主轴对齐 */
    align-items: center; /* 交叉轴对齐 */
    gap: 20px; /* 间距 */
}
```

### 常见布局示例

#### 水平居中

```css
.center-h {
    display: flex;
    justify-content: center;
}
```

#### 垂直居中

```css
.center-v {
    display: flex;
    align-items: center;
}
```

#### 完全居中

```css
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## Grid 布局

Grid是二维布局模型，适合处理复杂的网格布局。

### 基本用法

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
    gap: 20px;
}
```

### 响应式网格

```css
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}
```

## 实际应用示例

### 卡片布局

```css
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### 导航栏布局

```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
    background: #333;
    color: white;
}

.nav-links {
    display: flex;
    gap: 20px;
}
```

### 页脚布局

```css
.footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 40px 20px;
    background: #f5f5f5;
}
```

## 响应式设计

### 媒体查询

```css
/* 移动端优先 */
.container {
    padding: 10px;
}

/* 平板 */
@media (min-width: 768px) {
    .container {
        padding: 20px;
    }
}

/* 桌面 */
@media (min-width: 1024px) {
    .container {
        padding: 40px;
    }
}
```

### Flexbox 响应式

```css
.responsive-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.responsive-flex > * {
    flex: 1 1 300px; /* 最小宽度300px */
}
```

## 常见问题解决方案

### 等高列

```css
.equal-height {
    display: flex;
}

.equal-height > * {
    flex: 1;
}
```

### 粘性页脚

```css
.page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    flex: 1;
}
```

## 最佳实践总结

| 布局类型 | 推荐方案 | 说明 |
|---------|---------|------|
| 导航栏 | Flexbox | 一维布局，简单灵活 |
| 卡片网格 | Grid | 二维布局，自动换行 |
| 居中对齐 | Flexbox | 简单易用 |
| 复杂布局 | Grid | 功能强大 |

## 性能优化

1. **避免过度嵌套**
2. **使用CSS变量**
3. **合理使用will-change**
4. **减少重排重绘**

---

*最后更新：2024年1月5日*
