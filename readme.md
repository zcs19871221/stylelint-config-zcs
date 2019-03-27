# styleint 配置插件

## 安装

    npm install --save-dev stylelint-config-zcs stylelint-a11y stylelint-config-prettier stylelint-no-unsupported-browser-features

## 规范文档

[文档地址](./doc/index.md)

## 约束范围

1. css 错误语法
2. css 功能限制
3. css 样式 - (配合 prettier:先 prettier 格式化,剩下的进行检查)
4. css 可访问性
5. 根据 browserslist 检查浏览器兼容性

## 可用功能

### 检查是否最新规则

    npm run checkRule

### 生成文档

    npm run createDoc
