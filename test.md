### [＃](#possible-errors)可能的错误

#### [＃](#color)颜色

- [`color-no-invalid-hex`](color-no-invalid-hex/)：禁止无效的十六进制颜色。

#### [＃](#font-family)字体系列

- [`font-family-no-duplicate-names`](font-family-no-duplicate-names/)：禁止重复的字体系列名称。
- [`font-family-no-missing-generic-family-keyword`](font-family-no-missing-generic-family-keyword/)：禁止在字体系列名称列表中缺少通用族。

#### [＃](#function)功能

- [`function-calc-no-invalid`](function-calc-no-invalid/)：禁止`calc`函数内的无效表达式。
- [`function-calc-no-unspaced-operator`](function-calc-no-unspaced-operator/)：禁止`calc`函数内的未空格运算符。
- [`function-linear-gradient-no-nonstandard-direction`](function-linear-gradient-no-nonstandard-direction/)：禁用`linear-gradient()`根据[标准语法](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax)无效的调用中的方向值。

#### [＃](#string)串

- [`string-no-newline`](string-no-newline/)：禁止（未转义）字符串中的换行符。

#### [＃](#unit)单元

- [`unit-no-unknown`](unit-no-unknown/)：禁止未知单位。

#### [＃](#property)属性

- [`property-no-unknown`](property-no-unknown/)：禁止未知属性。

#### [＃](#keyframe-declaration)关键帧声明

- [`keyframe-declaration-no-important`](keyframe-declaration-no-important/)：禁止`!important`在关键帧声明中。

#### [＃](#declaration-block)声明块

- [`declaration-block-no-duplicate-properties`](declaration-block-no-duplicate-properties/)：禁止声明块中的重复属性。
- [`declaration-block-no-shorthand-property-overrides`](declaration-block-no-shorthand-property-overrides/)：禁止覆盖声明块中相关的 longhand 属性的速记属性。

#### [＃](#block)块

- [`block-no-empty`](block-no-empty/)：禁止空块。

#### [＃](#selector)选择

- [`selector-pseudo-class-no-unknown`](selector-pseudo-class-no-unknown/)：禁止未知的伪类选择器。
- [`selector-pseudo-element-no-unknown`](selector-pseudo-element-no-unknown/)：禁止未知的伪元素选择器。
- [`selector-type-no-unknown`](selector-type-no-unknown/)：禁止未知类型选择器。

#### [＃](#media-feature)媒体功能

- [`media-feature-name-no-unknown`](media-feature-name-no-unknown/)：禁止未知的媒体功能名称。

#### [＃](#at-rule)在规则

- [`at-rule-no-unknown`](at-rule-no-unknown/)：禁止未知的规则。

#### [＃](#comment)评论

- [`comment-no-empty`](comment-no-empty/)：禁止空评论。

#### [＃](#general--sheet)一般/表

- [`no-descending-specificity`](no-descending-specificity/)：不允许选择具有较低特异性的选择子来覆盖更高特异性的选择者。
- [`no-duplicate-at-import-rules`](no-duplicate-at-import-rules/)：禁止`@import`样式表中的重复规则。
- [`no-duplicate-selectors`](no-duplicate-selectors/)：禁止重复选择器。
- [`no-empty-source`](no-empty-source/)：禁止空来源。
- [`no-extra-semicolons`](no-extra-semicolons/)：禁止使用额外的分号（Autofixable）。
- [`no-invalid-double-slash-comments`](no-invalid-double-slash-comments/)：禁止`//...`CSS 不支持双斜杠注释（）。

### [＃](#limit-language-features)限制语言功能

#### [＃](#color-1)颜色

- [`color-named`](color-named/)：要求（如果可能）或禁止命名颜色。
- [`color-no-hex`](color-no-hex/)：禁止十六进制颜色。

#### [＃](#function-1)功能

- [`function-blacklist`](function-blacklist/)：指定不允许的功能的黑名单。
- [`function-url-no-scheme-relative`](function-url-no-scheme-relative/)：禁止方案相对网址。
- [`function-url-scheme-blacklist`](function-url-scheme-blacklist/)：指定不允许的 URL 方案的黑名单。
- [`function-url-scheme-whitelist`](function-url-scheme-whitelist/)：指定允许的 url 方案的白名单。
- [`function-whitelist`](function-whitelist/)：指定允许的功能的白名单。

#### [＃](#keyframes)关键帧

- [`keyframes-name-pattern`](keyframes-name-pattern/)：指定关键帧名称的模式。

#### [＃](#number)数

- [`number-max-precision`](number-max-precision/)：限制数字中允许的小数位数。

#### [＃](#time)时间

- [`time-min-milliseconds`](time-min-milliseconds/)：指定时间值的最小毫秒数。

#### [＃](#unit-1)单元

- [`unit-blacklist`](unit-blacklist/)：指定不允许单位的黑名单。
- [`unit-whitelist`](unit-whitelist/)：指定允许单位的白名单。

#### [＃](#shorthand-property)速记财产

- [`shorthand-property-no-redundant-values`](shorthand-property-no-redundant-values/)：禁用速记属性中的冗余值（自动固定）。

#### [＃](#value)值

- [`value-no-vendor-prefix`](value-no-vendor-prefix/)：禁止值的供应商前缀。

#### [＃](#custom-property)定制财产

- [`custom-property-pattern`](custom-property-pattern/)：指定自定义属性的模式。

#### [＃](#property-1)属性

- [`property-blacklist`](property-blacklist/)：指定不允许的属性的黑名单。
- [`property-no-vendor-prefix`](property-no-vendor-prefix/)：禁止属性的供应商前缀。
- [`property-whitelist`](property-whitelist/)：指定允许的属性的白名单。

#### [＃](#declaration)宣言

- [`declaration-block-no-redundant-longhand-properties`](declaration-block-no-redundant-longhand-properties/)：禁止可以合并为一个速记属性的 longhand 属性。
- [`declaration-no-important`](declaration-no-important/)：`!important`在声明中不允许。
- [`declaration-property-unit-blacklist`](declaration-property-unit-blacklist/)：在声明中指定不允许的属性和单位对的黑名单。
- [`declaration-property-unit-whitelist`](declaration-property-unit-whitelist/)：在声明中指定允许的属性和单元对的白名单。
- [`declaration-property-value-blacklist`](declaration-property-value-blacklist/)：在声明中指定不允许的属性和值对的黑名单。
- [`declaration-property-value-whitelist`](declaration-property-value-whitelist/)：在声明中指定允许的属性和值对的白名单。

#### [＃](#declaration-block-1)声明块

- [`declaration-block-single-line-max-declarations`](declaration-block-single-line-max-declarations/)：限制单行声明块中的声明数。

#### [＃](#selector-1)选择

- [`selector-attribute-operator-blacklist`](selector-attribute-operator-blacklist/)：指定不允许的属性运算符的黑名单。
- [`selector-attribute-operator-whitelist`](selector-attribute-operator-whitelist/)：指定允许的属性运算符的白名单。
- [`selector-class-pattern`](selector-class-pattern/)：为类选择器指定模式。
- [`selector-combinator-blacklist`](selector-combinator-blacklist/)：指定不允许的组合子的黑名单。
- [`selector-combinator-whitelist`](selector-combinator-whitelist/)：指定允许的组合器的白名单。
- [`selector-id-pattern`](selector-id-pattern/)：为 ID 选择器指定模式。
- [`selector-max-attribute`](selector-max-attribute/)：限制选择器中的属性选择器数量。
- [`selector-max-class`](selector-max-class/)：限制选择器中的类数。
- [`selector-max-combinators`](selector-max-combinators/)：限制选择器中组合子的数量。
- [`selector-max-compound-selectors`](selector-max-compound-selectors/)：限制选择器中复合选择器的数量。
- [`selector-max-empty-lines`](selector-max-empty-lines/)：限制选择器中相邻空行的数量。
- [`selector-max-id`](selector-max-id/)：限制选择器中 ID 选择器的数量。
- [`selector-max-pseudo-class`](selector-max-pseudo-class/)：限制选择器中的伪类数。
- [`selector-max-specificity`](selector-max-specificity/)：限制选择器的特异性。
- [`selector-max-type`](selector-max-type/)：限制选择器中的类型数。
- [`selector-max-universal`](selector-max-universal/)：限制选择器中的通用选择器数量。
- [`selector-nested-pattern`](selector-nested-pattern/)：为嵌套在规则中的规则选择器指定模式。
- [`selector-no-qualifying-type`](selector-no-qualifying-type/)：禁止按类型限定选择器。
- [`selector-no-vendor-prefix`](selector-no-vendor-prefix/)：禁止选择器的供应商前缀。
- [`selector-pseudo-class-blacklist`](selector-pseudo-class-blacklist/)：指定不允许的伪类选择器的黑名单。
- [`selector-pseudo-class-whitelist`](selector-pseudo-class-whitelist/)：指定允许的伪类选择器的白名单。
- [`selector-pseudo-element-blacklist`](selector-pseudo-element-blacklist/)：指定不允许的伪元素选择器的黑名单。
- [`selector-pseudo-element-whitelist`](selector-pseudo-element-whitelist/)：指定允许的伪元素选择器的白名单。

#### [＃](#media-feature-1)媒体功能

- [`media-feature-name-blacklist`](media-feature-name-blacklist/)：指定不允许的媒体功能名称的黑名单。
- [`media-feature-name-no-vendor-prefix`](media-feature-name-no-vendor-prefix/)：禁止媒体功能名称的供应商前缀。
- [`media-feature-name-value-whitelist`](media-feature-name-value-whitelist/)：指定允许的媒体功能名称和值对的白名单。
- [`media-feature-name-whitelist`](media-feature-name-whitelist/)：指定允许的媒体功能名称的白名单。

#### [＃](#custom-media)自定义媒体

- [`custom-media-pattern`](custom-media-pattern/)：为自定义媒体查询名称指定模式。

#### [＃](#at-rule-1)在规则

- [`at-rule-blacklist`](at-rule-blacklist/)：指定不允许的 at-rules 黑名单。
- [`at-rule-no-vendor-prefix`](at-rule-no-vendor-prefix/)：禁止 at-rules 的供应商前缀。
- [`at-rule-whitelist`](at-rule-whitelist/)：指定允许的 at-rules 的白名单。

#### [＃](#comment-1)评论

- [`comment-word-blacklist`](comment-word-blacklist/)：在注释中指定不允许的单词的黑名单。

#### [＃](#general--sheet-1)一般/表

- [`max-nesting-depth`](max-nesting-depth/)：限制嵌套深度。
- [`no-unknown-animations`](no-unknown-animations/)：禁止未知的动画。

### [＃](#stylistic-issues)文体问题

#### [＃](#color-2)颜色

- [`color-hex-case`](color-hex-case/)：为十六进制颜色指定小写或大写（自动固定）。
- [`color-hex-length`](color-hex-length/)：为十六进制颜色指定短或长符号（自动固定）。

#### [＃](#font-family-1)字体系列

- [`font-family-name-quotes`](font-family-name-quotes/)：指定是否应在字体系列名称周围使用引号。

#### [＃](#font-weight)字体重量

- [`font-weight-notation`](font-weight-notation/)：需要数字或命名（如果可能）`font-weight`值。

#### [＃](#function-2)功能

- [`function-comma-newline-after`](function-comma-newline-after/)：在函数逗号后面需要换行符或禁止空格（Autofixable）。
- [`function-comma-newline-before`](function-comma-newline-before/)：在函数逗号（Autofixable）之前需要换行符或禁止空格。
- [`function-comma-space-after`](function-comma-space-after/)：需要单个空格或在函数逗号后禁用空格（自动固定）。
- [`function-comma-space-before`](function-comma-space-before/)：在函数逗号（Autofixable）之前需要单个空格或禁止空格。
- [`function-max-empty-lines`](function-max-empty-lines/)：限制函数内的相邻空行数（自动固定）。
- [`function-name-case`](function-name-case/)：为函数名称指定小写或大写（Autofixable）。
- [`function-parentheses-newline-inside`](function-parentheses-newline-inside/)：需要换行符或禁止函数括号内部的空格（Autofixable）。
- [`function-parentheses-space-inside`](function-parentheses-space-inside/)：需要单个空格或禁止函数括号内部的空格（Autofixable）。
- [`function-url-quotes`](function-url-quotes/)：要求或禁止网址的引号。
- [`function-whitespace-after`](function-whitespace-after/)：在函数（Autofixable）之后需要或禁止空格。

#### [＃](#number-1)数

- [`number-leading-zero`](number-leading-zero/)：要求或禁止小于 1 的小数的前导零（自动固定）。
- [`number-no-trailing-zeros`](number-no-trailing-zeros/)：禁止数字尾随零（自动固定）。

#### [＃](#string-1)串

- [`string-quotes`](string-quotes/)：在字符串周围指定单引号或双引号（Autofixable）。

#### [＃](#length)长度

- [`length-zero-no-unit`](length-zero-no-unit/)：禁止零长度的单位（自动固定）。

#### [＃](#unit-2)单元

- [`unit-case`](unit-case/)：为单位指定小写或大写（自动固定）。

#### [＃](#value-1)值

- [`value-keyword-case`](value-keyword-case/)：为关键字值指定小写或大写（自动固定）。

#### [＃](#value-list)价值清单

- [`value-list-comma-newline-after`](value-list-comma-newline-after/)：在值列表的逗号（Autofixable）之后需要换行符或禁止空格。
- [`value-list-comma-newline-before`](value-list-comma-newline-before/)：在值列表的逗号之前需要换行符或禁止空格。
- [`value-list-comma-space-after`](value-list-comma-space-after/)：需要单个空格或在值列表的逗号（Autofixable）后禁用空格。
- [`value-list-comma-space-before`](value-list-comma-space-before/)：在值列表的逗号（Autofixable）之前需要单个空格或禁止空格。
- [`value-list-max-empty-lines`](value-list-max-empty-lines/)：限制值列表中相邻空行的数量（自动固定）。

#### [＃](#custom-property-1)定制财产

- [`custom-property-empty-line-before`](custom-property-empty-line-before/)：在自定义属性（Autofixable）之前需要或禁止空行。

#### [＃](#property-2)属性

- [`property-case`](property-case/)：为属性指定小写或大写（Autofixable）。

#### [＃](#declaration-1)宣言

- [`declaration-bang-space-after`](declaration-bang-space-after/)：声明爆炸后需要一个空格或不允许空格（Autofixable）。
- [`declaration-bang-space-before`](declaration-bang-space-before/)：在声明爆炸（Autofixable）之前需要单个空格或禁止空格。
- [`declaration-colon-newline-after`](declaration-colon-newline-after/)：在声明冒号（Autofixable）后需要换行符或禁止空格。
- [`declaration-colon-space-after`](declaration-colon-space-after/)：声明冒号（Autofixable）后需要单个空格或禁止空格。
- [`declaration-colon-space-before`](declaration-colon-space-before/)：在声明冒号（Autofixable）之前需要单个空格或禁止空格。
- [`declaration-empty-line-before`](declaration-empty-line-before/)：声明前需要或禁止空行（Autofixable）。

#### [＃](#declaration-block-2)声明块

- [`declaration-block-semicolon-newline-after`](declaration-block-semicolon-newline-after/)：在声明块的分号（Autofixable）后需要换行符或禁止空格。
- [`declaration-block-semicolon-newline-before`](declaration-block-semicolon-newline-before/)：在声明块的分号之前需要换行符或禁止空格。
- [`declaration-block-semicolon-space-after`](declaration-block-semicolon-space-after/)：在声明块的分号（Autofixable）后需要单个空格或禁止空格。
- [`declaration-block-semicolon-space-before`](declaration-block-semicolon-space-before/)：在声明块的分号（Autofixable）之前需要单个空格或禁止空格。
- [`declaration-block-trailing-semicolon`](declaration-block-trailing-semicolon/)：在声明块（Autofixable）中要求或禁止使用尾随分号。

#### [＃](#block-1)块

- [`block-closing-brace-empty-line-before`](block-closing-brace-empty-line-before/)：在块的右大括号（Autofixable）之前需要或禁止空行。
- [`block-closing-brace-newline-after`](block-closing-brace-newline-after/)：在块的右大括号（Autofixable）之后需要换行符或禁止空格。
- [`block-closing-brace-newline-before`](block-closing-brace-newline-before/)：在块的右大括号（Autofixable）之前需要换行符或禁止空格。
- [`block-closing-brace-space-after`](block-closing-brace-space-after/)：在块的右大括号后需要单个空格或不允许空格。
- [`block-closing-brace-space-before`](block-closing-brace-space-before/)：在块的右大括号（自动修复）之前需要单个空格或禁止空格。
- [`block-opening-brace-newline-after`](block-opening-brace-newline-after/)：在打开大括号块（Autofixable）后需要换行符。
- [`block-opening-brace-newline-before`](block-opening-brace-newline-before/)：在开始的块大括号（Autofixable）之前需要换行符或禁止空格。
- [`block-opening-brace-space-after`](block-opening-brace-space-after/)：需要一个空格或在块的左大括号（Autofixable）后禁止空格。
- [`block-opening-brace-space-before`](block-opening-brace-space-before/)：在开始的块大括号（Autofixable）之前需要单个空格或禁止空格。

#### [＃](#selector-2)选择

- [`selector-attribute-brackets-space-inside`](selector-attribute-brackets-space-inside/)：在属性选择器（Autofixable）中需要单个空格或禁止括号内部的空格。
- [`selector-attribute-operator-space-after`](selector-attribute-operator-space-after/)：在属性选择器（Autofixable）中的运算符之后需要单个空格或禁止空格。
- [`selector-attribute-operator-space-before`](selector-attribute-operator-space-before/)：在属性选择器（Autofixable）中的运算符之前需要单个空格或禁止空格。
- [`selector-attribute-quotes`](selector-attribute-quotes/)：要求或禁止属性值的引号。
- [`selector-combinator-space-after`](selector-combinator-space-after/)：在选择器的组合器（Autofixable）之后需要单个空格或禁止空格。
- [`selector-combinator-space-before`](selector-combinator-space-before/)：在选择器的组合器（Autofixable）之前需要单个空格或禁止空格。
- [`selector-descendant-combinator-no-non-space`](selector-descendant-combinator-no-non-space/)：禁止选择器的后代组合器（自动固定）的非空格字符。
- [`selector-pseudo-class-case`](selector-pseudo-class-case/)：为伪类选择器指定小写或大写（Autofixable）。
- [`selector-pseudo-class-parentheses-space-inside`](selector-pseudo-class-parentheses-space-inside/)：需要单个空格或禁止伪类选择器（Autofixable）中括号内部的空格。
- [`selector-pseudo-element-case`](selector-pseudo-element-case/)：为伪元素选择器指定小写或大写。
- [`selector-pseudo-element-colon-notation`](selector-pseudo-element-colon-notation/)：为适用的伪元素（Autofixable）指定单冒号或双冒号表示法。
- [`selector-type-case`](selector-type-case/)：为类型选择器指定小写或大写（Autofixable）。

#### [＃](#selector-list)选择列表

- [`selector-list-comma-newline-after`](selector-list-comma-newline-after/)：在选择器列表的逗号（Autofixable）之后需要换行符或禁止空格。
- [`selector-list-comma-newline-before`](selector-list-comma-newline-before/)：在选择器列表的逗号（Autofixable）之前需要换行符或禁止空格。
- [`selector-list-comma-space-after`](selector-list-comma-space-after/)：在选择器列表的逗号（Autofixable）之后需要单个空格或禁止空格。
- [`selector-list-comma-space-before`](selector-list-comma-space-before/)：在选择器列表的逗号（Autofixable）之前需要单个空格或禁止空格。

#### [＃](#rule)规则

- [`rule-empty-line-before`](rule-empty-line-before/)：在规则之前要求或禁止空行（Autofixable）。

#### [＃](#media-feature-2)媒体功能

- [`media-feature-colon-space-after`](media-feature-colon-space-after/)：在媒体要素（自动固定）中冒号后需要单个空格或禁止空格。
- [`media-feature-colon-space-before`](media-feature-colon-space-before/)：在媒体要素（自动固定）中冒号前需要单个空格或禁止空格。
- [`media-feature-name-case`](media-feature-name-case/)：为媒体功能名称指定小写或大写（自动固定）。
- [`media-feature-parentheses-space-inside`](media-feature-parentheses-space-inside/)：需要单个空格或禁止媒体功能（自动修复）中括号内侧的空格。
- [`media-feature-range-operator-space-after`](media-feature-range-operator-space-after/)：在媒体功能（自动修复）中的范围运算符后，需要单个空格或禁止空格。
- [`media-feature-range-operator-space-before`](media-feature-range-operator-space-before/)：在媒体功能（自动修复）中的范围运算符之前需要单个空格或禁止空格。

#### [＃](#media-query-list)媒体查询列表

- [`media-query-list-comma-newline-after`](media-query-list-comma-newline-after/)：在媒体查询列表（Autofixable）的逗号后面需要换行符或禁止空格。
- [`media-query-list-comma-newline-before`](media-query-list-comma-newline-before/)：在媒体查询列表的逗号之前需要换行符或禁止空格。
- [`media-query-list-comma-space-after`](media-query-list-comma-space-after/)：在媒体查询列表（Autofixable）的逗号后面需要单个空格或禁止空格。
- [`media-query-list-comma-space-before`](media-query-list-comma-space-before/)：在媒体查询列表（Autofixable）的逗号之前需要单个空格或禁止空格。

#### [＃](#at-rule-2)在规则

- [`at-rule-empty-line-before`](at-rule-empty-line-before/)：在 at-rules 之前要求或禁止空行（Autofixable）。
- [`at-rule-name-case`](at-rule-name-case/)：为 at-rules 名称指定小写或大写（Autofixable）。
- [`at-rule-name-newline-after`](at-rule-name-newline-after/)：在规则名称后需要换行符。
- [`at-rule-name-space-after`](at-rule-name-space-after/)：在规则名称后面需要一个空格（Autofixable）。
- [`at-rule-semicolon-newline-after`](at-rule-semicolon-newline-after/)：在 at-rules 分号后面需要换行符（Autofixable）。
- [`at-rule-semicolon-space-before`](at-rule-semicolon-space-before/)：在规则的分号前需要单个空格或禁止空格。

#### [＃](#comment-2)评论

- [`comment-empty-line-before`](comment-empty-line-before/)：在注释（Autofixable）之前要求或禁止空行。
- [`comment-whitespace-inside`](comment-whitespace-inside/)：要求或禁止评论标记（Autofixable）内部的空格。

#### [＃](#general--sheet-2)一般/表

- [`indentation`](indentation/)：指定缩进（Autofixable）。
- [`linebreaks`](linebreaks/)：指定 unix 或 windows linebreaks（Autofixable）。
- [`max-empty-lines`](max-empty-lines/)：限制相邻空行的数量。
- [`max-line-length`](max-line-length/)：限制线的长度。
- [`no-eol-whitespace`](no-eol-whitespace/)：禁止行尾空格（Autofixable）。
- [`no-missing-end-of-source-newline`](no-missing-end-of-source-newline/)：禁止缺少源代码换行符（Autofixable）。
- [`no-empty-first-line`](no-empty-first-line/)：禁止空第一行。（Autofixable）。
