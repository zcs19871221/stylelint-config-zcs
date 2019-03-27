# css 可访问性

## 目录

1. [a11y/content-property-no-static-value](#a11y/content-property-no-static-value)
2. [a11y/font-size-is-readable](#a11y/font-size-is-readable)
3. [a11y/line-height-is-vertical-rhythmed](#a11y/line-height-is-vertical-rhythmed)
4. [a11y/media-prefers-reduced-motion](#a11y/media-prefers-reduced-motion)
5. [a11y/media-prefers-color-scheme](#a11y/media-prefers-color-scheme)
6. [a11y/no-obsolete-attribute](#a11y/no-obsolete-attribute)
7. [a11y/no-obsolete-element](#a11y/no-obsolete-element)
8. [a11y/no-spread-text](#a11y/no-spread-text)
9. [a11y/no-outline-none](#a11y/no-outline-none)
10. [a11y/no-text-align-justify](#a11y/no-text-align-justify)
11. [a11y/selector-pseudo-class-focus](#a11y/selector-pseudo-class-focus)

<a id='a11y/content-property-no-static-value'></a>
## a11y/content-property-no-static-value

- 规则含义

  禁止使用css创造内容除非是空字符串或使用aria-label标签属性

- 错误例子

      .foo:: before {  
        content: 'Price: $50';  
      }

- 正确例子

      .foo {  
        content: '';  
      }  
      .foo {  
        content: attr(aria-label);  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/content-property-no-static-value/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/font-size-is-readable'></a>
## a11y/font-size-is-readable

- 规则含义

  禁止字体小于15px

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/font-size-is-readable/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/line-height-is-vertical-rhythmed'></a>
## a11y/line-height-is-vertical-rhythmed

- 规则含义

  强制使用垂直节奏  
  获取一个基线(正文的行高)，然后页面上的所有行高和空白都设置为基线的倍数  
  限制line-height为24px的倍数或大于1.6倍

- 规则原因

  https://zellwk.com/blog/why-vertical-rhythms/  
  https://zellwk.com/blog/responsive-vertical-rhythm/

- 错误例子

      .foo {  
        transition: width 2s;  
      }

- 正确例子

      .foo {  
        transition: width 2s;  
      }  
      @media screen and (prefers-reduced-motion: reduce) {  
        .foo {  
          transition: none;  
        }  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/line-height-is-vertical-rhythmed/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/media-prefers-reduced-motion'></a>
## a11y/media-prefers-reduced-motion

- 规则含义

  所有动画和过渡效果必须有对应的`prefers-reduced-motion:reduce`at rules

- 规则原因

  为了支持ios7为了针对3d眩晕患者提供的手机配置项：减少动画效果  
  https://webkit.org/blog/7551/responsive-design-for-motion/

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-reduced-motion/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/media-prefers-color-scheme'></a>
## a11y/media-prefers-color-scheme

- 规则含义

  设置color的话，必须设置`prefers-color-scheme:reduce`at rules

- 规则原因

  浏览器必须支持手机的明暗模式

- 错误例子

      .foo {  
        color: red;  
      }

- 正确例子

      .foo {  
        color: red;  
      }  
      @media screen and (prefers-color-scheme: dark) {  
        .foo {  
          color: grey;  
        }  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/media-prefers-color-scheme/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/no-obsolete-attribute'></a>
## a11y/no-obsolete-attribute

- 规则含义

  禁止使用过时的属性

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-attribute/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/no-obsolete-element'></a>
## a11y/no-obsolete-element

- 规则含义

  禁止使用过时的元素

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-obsolete-element/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/no-spread-text'></a>
## a11y/no-spread-text

- 规则含义

  要求文本段的长短在45-80ch之间

- 规则原因

  提高可访问性  
  https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939

- 错误例子

      .foo {  
        text-transform: lowercase;  
        max-width: 40ch;  
      }

- 正确例子

      .foo {  
        max-width: 65ch;  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-spread-text/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/no-outline-none'></a>
## a11y/no-outline-none

- 规则含义

  不要给聚焦元素设置outline:none

- 规则原因

  outline会给可聚焦元素得到聚焦后一个视觉反馈，  
  如果删除了，视障人士无法有效得知聚焦情况  
  https://a11yproject.com/posts/never-remove-css-outlines/

- 错误例子

      .foo:focus {  
        outline: 0;  
      }  
      .foo:focus {  
        outline: none;  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-outline-none/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/no-text-align-justify'></a>
## a11y/no-text-align-justify

- 规则含义

  禁止使用`text-align: justify;`属性

- 规则原因

  对齐选项会造成段落中出现大段的空白，不利于阅读

- 错误例子

      .foo {  
        text-align: justify;  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/no-text-align-justify/README.md)

**[⬆ 回到目录](#目录)**

<a id='a11y/selector-pseudo-class-focus'></a>
## a11y/selector-pseudo-class-focus

- 规则含义

  a标签如果设置了hover伪类样式，必须设置focus伪类

- 规则原因

  要对使用键盘的用户提供同样的视觉效果

- 错误例子

      a:hover {  
      }

- 正确例子

      a:hover,  
      a:focus {  
      }

[eslint](https://github.com/YozhikM/stylelint-a11y/blob/master/src/rules/selector-pseudo-class-focus/README.md)

**[⬆ 回到目录](#目录)**

