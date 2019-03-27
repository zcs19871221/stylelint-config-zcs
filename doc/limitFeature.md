# 限制功能

## 目录

1. [function-url-no-scheme-relative](#function-url-no-scheme-relative)
2. [number-max-precision](#number-max-precision)
3. [shorthand-property-no-redundant-values](#shorthand-property-no-redundant-values)
4. [declaration-block-no-redundant-longhand-properties](#declaration-block-no-redundant-longhand-properties)
5. [declaration-no-important](#declaration-no-important)
6. [declaration-block-single-line-max-declarations](#declaration-block-single-line-max-declarations)
7. [selector-no-qualifying-type](#selector-no-qualifying-type)
8. [max-nesting-depth](#max-nesting-depth)
9. [no-unknown-animations](#no-unknown-animations)

<a id='function-url-no-scheme-relative'></a>
## function-url-no-scheme-relative

- 规则含义

  禁止使用协议相关地址(//开头)

- 规则原因

  协议相关地址的作用就是让你使用当前协议获取资源地址  
  是为了使用http协议访问https静态资源的兼容行为。  
  应该永远使用https协议保证安全性

- 错误例子

      a {  
        background: url("//www.google.com/file.jpg");  
      }

- 正确例子

      a {  
        background: url("./file.jpg");  
      }

[eslint](https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/)

**[⬆ 回到目录](#目录)**

<a id='number-max-precision'></a>
## number-max-precision

- 规则含义

  限制数字的最多小数点位数为2

- 规则原因

  有的浏览器只保留小数点两位，保持一致

[eslint](https://stylelint.io/user-guide/rules/number-max-precision/)

**[⬆ 回到目录](#目录)**

<a id='shorthand-property-no-redundant-values'></a>
## shorthand-property-no-redundant-values

- 规则含义

  简写属性不允许写冗余值

- 错误例子

      a { margin: 1px 1px 1px 1px; }  
      a { margin: 1px 1px }

- 正确例子

      a { margin: 1px}

[eslint](https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/)

**[⬆ 回到目录](#目录)**

<a id='declaration-block-no-redundant-longhand-properties'></a>
## declaration-block-no-redundant-longhand-properties

- 规则含义

  能用简写的属性尽量使用简写

[eslint](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/)

**[⬆ 回到目录](#目录)**

<a id='declaration-no-important'></a>
## declaration-no-important

- 规则含义

  禁止使用`!import`

[eslint](https://stylelint.io/user-guide/rules/declaration-no-important/)

**[⬆ 回到目录](#目录)**

<a id='declaration-block-single-line-max-declarations'></a>
## declaration-block-single-line-max-declarations

- 规则含义

  一行只允许一个声明语句

- 错误例子

      a { color: pink; top: 3px; }

- 正确例子

      a {  
        color: pink;  
        top: 3px;  
      }

[eslint](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/)

**[⬆ 回到目录](#目录)**

<a id='selector-no-qualifying-type'></a>
## selector-no-qualifying-type

[eslint](https://stylelint.io/user-guide/rules/selector-no-qualifying-type/)

**[⬆ 回到目录](#目录)**

<a id='max-nesting-depth'></a>
## max-nesting-depth

- 规则含义

  最大嵌套层为2

[eslint](https://stylelint.io/user-guide/rules/max-nesting-depth/)

**[⬆ 回到目录](#目录)**

<a id='no-unknown-animations'></a>
## no-unknown-animations

- 规则含义

  禁止未知的动画名称

[eslint](https://stylelint.io/user-guide/rules/no-unknown-animations/)

**[⬆ 回到目录](#目录)**

