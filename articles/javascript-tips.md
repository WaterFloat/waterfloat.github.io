# JavaScript 实用技巧分享

在日常开发中，掌握一些JavaScript技巧可以大大提高开发效率。本文分享一些实用的技巧。

## 数组操作技巧

### 1. 数组去重

```javascript
// 使用Set快速去重
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]
```

### 2. 数组扁平化

```javascript
// 多维数组转一维数组
const arr = [1, [2, 3], [4, [5, 6]]];
const flat = arr.flat(Infinity);
console.log(flat); // [1, 2, 3, 4, 5, 6]
```

### 3. 数组求和

```javascript
// 使用reduce求和
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
```

## 对象处理技巧

### 1. 对象解构

```javascript
const user = {
    name: '张三',
    age: 25,
    city: '北京'
};

const { name, age } = user;
console.log(name, age); // 张三 25
```

### 2. 对象合并

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }
```

## 字符串处理

### 1. 模板字符串

```javascript
const name = '李四';
const greeting = `你好，${name}！欢迎来到我的博客。`;
console.log(greeting);
```

### 2. 字符串包含检查

```javascript
const str = 'JavaScript很有趣';
console.log(str.includes('Java')); // true
console.log(str.startsWith('Java')); // true
```

## 异步编程

### async/await 使用

```javascript
async function fetchArticle(id) {
    try {
        const response = await fetch(`/articles/${id}.md`);
        const content = await response.text();
        return content;
    } catch (error) {
        console.error('加载失败:', error);
        return null;
    }
}
```

## 实用工具函数

### 防抖函数

```javascript
function debounce(func, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}
```

### 节流函数

```javascript
function throttle(func, limit) {
    let inThrottle = false;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
```

## 性能优化建议

1. **避免在循环中创建函数**
2. **使用事件委托处理大量元素**
3. **合理使用缓存**
4. **减少DOM操作**

## 总结

这些技巧在日常开发中非常实用，建议多加练习和应用。

---

*最后更新：2024年1月10日*
