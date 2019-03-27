# 代码样式

## 目录

1. [function-name-case](#function-name-case)
2. [function-url-quotes](#function-url-quotes)
3. [number-leading-zero](#number-leading-zero)
4. [number-no-trailing-zeros](#number-no-trailing-zeros)
5. [length-zero-no-unit](#length-zero-no-unit)
6. [value-keyword-case](#value-keyword-case)
7. [selector-pseudo-element-colon-notation](#selector-pseudo-element-colon-notation)
8. [selector-type-case](#selector-type-case)
9. [font-family-name-quotes](#font-family-name-quotes)
10. [linebreaks](#linebreaks)

<a id='function-name-case'></a>
## function-name-case

[eslint](https://stylelint.io/user-guide/rules/function-name-case/)

**[⬆ 回到目录](#目录)**

<a id='function-url-quotes'></a>
## function-url-quotes

- 规则含义

  url地址强制使用括号括起来

- 规则原因

  如果不用括号括起来，使用react时候，地址里面如果有特殊符号比如}，会错误解析  
  因为react不知道哪个位置是url边界

[eslint](https://stylelint.io/user-guide/rules/function-url-quotes/)

**[⬆ 回到目录](#目录)**

<a id='number-leading-zero'></a>
## number-leading-zero

- 规则含义

  小数点前必须加0

[eslint](https://stylelint.io/user-guide/rules/number-leading-zero/)

**[⬆ 回到目录](#目录)**

<a id='number-no-trailing-zeros'></a>
## number-no-trailing-zeros

- 规则含义

  禁止小数点后末尾是0

[eslint](https://stylelint.io/user-guide/rules/number-no-trailing-zeros/)

**[⬆ 回到目录](#目录)**

<a id='length-zero-no-unit'></a>
## length-zero-no-unit

- 规则含义

  禁止给0长度后面加单位

[eslint](https://stylelint.io/user-guide/rules/length-zero-no-unit/)

**[⬆ 回到目录](#目录)**

<a id='value-keyword-case'></a>
## value-keyword-case

[eslint](https://stylelint.io/user-guide/rules/value-keyword-case/)

**[⬆ 回到目录](#目录)**

<a id='selector-pseudo-element-colon-notation'></a>
## selector-pseudo-element-colon-notation

- 规则含义

  伪元素选择器永远使用::双冒号

[eslint](https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/)

**[⬆ 回到目录](#目录)**

<a id='selector-type-case'></a>
## selector-type-case

- 规则含义

  标签选择器必须小写

[eslint](https://stylelint.io/user-guide/rules/selector-type-case/)

**[⬆ 回到目录](#目录)**

<a id='font-family-name-quotes'></a>
## font-family-name-quotes

- 规则含义

  除了通用字体外，使用引号括起所有字体

- 错误例子

      a { font-family: Arial, sans-serif; }

- 正确例子

      a { font-family: 'Arial', sans-serif; }

[eslint](https://stylelint.io/user-guide/rules/font-family-name-quotes/)

**[⬆ 回到目录](#目录)**

<a id='linebreaks'></a>
## linebreaks

- 规则含义

  换行符必须是unix风格的`\n`

[eslint](https://stylelint.io/user-guide/rules/linebreaks/)

**[⬆ 回到目录](#目录)**

