# 错误语法

## 目录

1. [color-no-invalid-hex](#color-no-invalid-hex)
2. [font-family-no-duplicate-names](#font-family-no-duplicate-names)
3. [font-family-no-missing-generic-family-keyword](#font-family-no-missing-generic-family-keyword)
4. [function-calc-no-invalid](#function-calc-no-invalid)
5. [function-linear-gradient-no-nonstandard-direction](#function-linear-gradient-no-nonstandard-direction)
6. [string-no-newline](#string-no-newline)
7. [unit-no-unknown](#unit-no-unknown)
8. [property-no-unknown](#property-no-unknown)
9. [keyframe-declaration-no-important](#keyframe-declaration-no-important)
10. [declaration-block-no-duplicate-properties](#declaration-block-no-duplicate-properties)
11. [declaration-block-no-shorthand-property-overrides](#declaration-block-no-shorthand-property-overrides)
12. [block-no-empty](#block-no-empty)
13. [selector-pseudo-class-no-unknown](#selector-pseudo-class-no-unknown)
14. [selector-pseudo-element-no-unknown](#selector-pseudo-element-no-unknown)
15. [selector-type-no-unknown](#selector-type-no-unknown)
16. [media-feature-name-no-unknown](#media-feature-name-no-unknown)
17. [at-rule-no-unknown](#at-rule-no-unknown)
18. [comment-no-empty](#comment-no-empty)
19. [no-descending-specificity](#no-descending-specificity)
20. [no-duplicate-at-import-rules](#no-duplicate-at-import-rules)
21. [no-duplicate-selectors](#no-duplicate-selectors)
22. [no-empty-source](#no-empty-source)
23. [no-extra-semicolons](#no-extra-semicolons)
24. [no-invalid-double-slash-comments](#no-invalid-double-slash-comments)

<a id='color-no-invalid-hex'></a>
## color-no-invalid-hex

- 规则含义

  禁止无效的十六进制颜色  
  位数限制为2,3,4,6,8  
  字母限制到f

- 规则原因

  十六进制颜色分为6位（红绿蓝）或8位（红绿蓝6位+2位alpha通道代表透明度）  
  简写可以是3位#abc => #aabbccdd  
  或4位#abcd => #aabbccdd

[eslint](https://stylelint.io/user-guide/rules/color-no-invalid-hex/)

**[⬆ 回到目录](#目录)**

<a id='font-family-no-duplicate-names'></a>
## font-family-no-duplicate-names

- 规则含义

  禁止font-family中有重复定义

[eslint](https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/)

**[⬆ 回到目录](#目录)**

<a id='font-family-no-missing-generic-family-keyword'></a>
## font-family-no-missing-generic-family-keyword

- 规则含义

  禁止在font-family中缺少通用族

- 规则原因

  font-family是一个列表，  
  当浏览器遇到一个字符时候，会从列表的开始位置寻找字体是否有对应的字符，  
  如果有，就给这个字符应用字体，否则往下走。

[eslint](https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/)

**[⬆ 回到目录](#目录)**

<a id='function-calc-no-invalid'></a>
## function-calc-no-invalid

- 规则含义

  检验calc语法正确性

- 规则原因

  calc语法：  
  1. 必须是一个表达式  
  2. 参数之间必须有运算符  
  3. 不能除0  
  4. 操作符之间必须有空格

[eslint](https://stylelint.io/user-guide/rules/function-calc-no-invalid/)

**[⬆ 回到目录](#目录)**

<a id='function-linear-gradient-no-nonstandard-direction'></a>
## function-linear-gradient-no-nonstandard-direction

- 规则含义

  禁止在`linear-gradient()`方法中使用无效的方向值

[eslint](https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/)

**[⬆ 回到目录](#目录)**

<a id='string-no-newline'></a>
## string-no-newline

- 规则含义

  禁止字符串中出现未转义换行

- 规则原因

  规范定义，字符串中不能直接包含换行。请使用\A或\00000a换行

- 错误例子

      a {  
       content: "first  
       second";  
      }

- 正确例子

      a {  
      content: "first\Asecond";  
      }

[eslint](https://stylelint.io/user-guide/rules/string-no-newline/)

**[⬆ 回到目录](#目录)**

<a id='unit-no-unknown'></a>
## unit-no-unknown

- 规则含义

  禁止使用未知的长度单元

- 错误例子

      width: 10pixels;

- 正确例子

      width: 10px;

[eslint](https://stylelint.io/user-guide/rules/unit-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='property-no-unknown'></a>
## property-no-unknown

- 规则含义

  禁止未知的属性

- 错误例子

      a {  
        colr: blue;  
      }

- 正确例子

      a {  
        color: blue;  
      }

[eslint](https://stylelint.io/user-guide/rules/property-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='keyframe-declaration-no-important'></a>
## keyframe-declaration-no-important

- 规则含义

  禁止在`keyframes`语法后使用import定义

- 规则原因

  有些浏览器下，该语法不生效

[eslint](https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/)

**[⬆ 回到目录](#目录)**

<a id='declaration-block-no-duplicate-properties'></a>
## declaration-block-no-duplicate-properties

- 规则含义

  禁止在块声明语句中定义重复的属性  
  但是连续的相同属性不同值是例外，为了兼容低版本浏览器

- 错误例子

      p {  
       font-size: 16px;  
       font-weight: 400;  
       font-size: 1rem;  
      }

- 正确例子

      p {  
       font-size: 16px;  
       font-size: 1rem;  
       font-weight: 400;  
      }

[eslint](https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/)

**[⬆ 回到目录](#目录)**

<a id='declaration-block-no-shorthand-property-overrides'></a>
## declaration-block-no-shorthand-property-overrides

- 规则含义

  禁止缩写名属性覆盖完整属性

- 规则原因

  多是意外操作

- 错误例子

      a {  
        padding-left: 10px;  
        padding: 20px;  
      }

- 正确例子

      a { padding: 10px; padding-left: 20px; }  
      a { padding: 10px;}

[eslint](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/)

**[⬆ 回到目录](#目录)**

<a id='block-no-empty'></a>
## block-no-empty

- 规则含义

  禁止出现空块

- 错误例子

      {}

[eslint](https://stylelint.io/user-guide/rules/block-no-empty/)

**[⬆ 回到目录](#目录)**

<a id='selector-pseudo-class-no-unknown'></a>
## selector-pseudo-class-no-unknown

- 规则含义

  禁止出现不正确的伪类选择器

- 错误例子

      a:unkown {}

- 正确例子

      a:hover {}

[eslint](https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='selector-pseudo-element-no-unknown'></a>
## selector-pseudo-element-no-unknown

- 规则含义

  禁止出现不正确的伪元素选择器

- 错误例子

      a::element{}

- 正确例子

      a::after{}

[eslint](https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='selector-type-no-unknown'></a>
## selector-type-no-unknown

- 规则含义

  禁止出现未知的类型（tag）选择器

[eslint](https://stylelint.io/user-guide/rules/selector-type-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='media-feature-name-no-unknown'></a>
## media-feature-name-no-unknown

- 规则含义

  禁止出现未知的媒体特征名

- 错误例子

      @media screen and(unknow) {}

- 正确例子

      @media all and (monochrome) {}

[eslint](https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='at-rule-no-unknown'></a>
## at-rule-no-unknown

- 规则含义

  禁止不正确的`@rule`语法

- 错误例子

      @unknown {}

- 正确例子

      @charset "UTF-8";

[eslint](https://stylelint.io/user-guide/rules/at-rule-no-unknown/)

**[⬆ 回到目录](#目录)**

<a id='comment-no-empty'></a>
## comment-no-empty

- 规则含义

  禁止空注释

[eslint](https://stylelint.io/user-guide/rules/comment-no-empty/)

**[⬆ 回到目录](#目录)**

<a id='no-descending-specificity'></a>
## no-descending-specificity

- 规则含义

  禁止高优先级规则出现在低优先级规则之前

- 规则原因

  两个同优先级的规则，在源代码中后定义的优先级高。因此为了和这个默认规则一致，  
  强制要求css规则都按照先出现的优先级低，后出现高的顺序排列。

- 错误例子

       #container a { top: 10px; } a { top: 0; }

- 正确例子

       a { top: 0; } #container a { top: 10px; }

[eslint](https://stylelint.io/user-guide/rules/no-descending-specificity/)

**[⬆ 回到目录](#目录)**

<a id='no-duplicate-at-import-rules'></a>
## no-duplicate-at-import-rules

- 规则含义

  禁止在`import`语法中导入重复的内容

[eslint](https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/)

**[⬆ 回到目录](#目录)**

<a id='no-duplicate-selectors'></a>
## no-duplicate-selectors

- 规则含义

  禁止重复的选择器

[eslint](https://stylelint.io/user-guide/rules/no-duplicate-selectors/)

**[⬆ 回到目录](#目录)**

<a id='no-empty-source'></a>
## no-empty-source

- 规则含义

  禁止出现空的css文件

[eslint](https://stylelint.io/user-guide/rules/no-empty-source/)

**[⬆ 回到目录](#目录)**

<a id='no-extra-semicolons'></a>
## no-extra-semicolons

- 规则含义

  禁止出现额外的分号

[eslint](https://stylelint.io/user-guide/rules/no-extra-semicolons/)

**[⬆ 回到目录](#目录)**

<a id='no-invalid-double-slash-comments'></a>
## no-invalid-double-slash-comments

- 规则含义

  禁止出现无效的`//`符号

- 规则原因

  css不支持该语法作为注释

[eslint](https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/)

**[⬆ 回到目录](#目录)**

