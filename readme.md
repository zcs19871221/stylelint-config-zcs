# styleint 配置插件

## 安装

    npm install --save-dev stylelint-config-zcs stylelint-a11y stylelint-config-prettier stylelint-no-unsupported-browser-features

## 使用

创建`.stylelintrc.js`,放到根目录,内容如下：

    module.exports = {
      extends: 'stylelint-config-zcs',
    };

### 集成 webpack

在预处理器 loader(less,sass)和 css-loader 之间添加 postcss-loader,插件使用 stylelint

代码类似：

    use: [
      // 抽象的css-loader
      modular({ prevLoader: 2, isUseSourceMap: true }),
      // postcss-loader集成stylelint
      {
        loader: require.resolve('postcss-loader'),
        options: {
          ident: 'postcss',
          plugins: () => [require('stylelint')()],
        },
      }
      // 抽象的预处理器loader(less,sass)
      cssCompile({ isUseSourceMap: true })
    ]

### 集成 vscode

安装拓展 [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)

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
