module.exports = {
  rules: {
    /**
     * @meaning
     * 禁止无效的十六进制颜色
     * 位数限制为2,3,4,6,8
     * 字母限制到f
     * @why
     * 十六进制颜色分为6位（红绿蓝）或8位（红绿蓝6位+2位alpha通道代表透明度）
     * 简写可以是3位#abc => #aabbccdd
     * 或4位#abcd => #aabbccdd
     * @wrong
     * @right
     * @group
     * 字体
     */
    'color-no-invalid-hex': true,

    /**
     * @meaning
     * 禁止font-family中有重复定义
     * @why
     * @wrong
     * @right
     */
    'font-family-no-duplicate-names': true,

    /**
     * @meaning
     * 禁止在font-family中缺少通用族
     * @why
     * font-family是一个列表，
     * 当浏览器遇到一个字符时候，会从列表的开始位置寻找字体是否有对应的字符，
     * 如果有，就给这个字符应用字体，否则往下走。
     * @wrong
     * @right
     */
    'font-family-no-missing-generic-family-keyword': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-calc-no-invalid': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-calc-no-unspaced-operator': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'string-no-newline': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'unit-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'property-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'keyframe-declaration-no-important': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-no-duplicate-properties': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-no-empty': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-class-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-type-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-no-unknown': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'comment-no-empty': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-descending-specificity': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-duplicate-at-import-rules': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-duplicate-selectors': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-empty-source': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-extra-semicolons': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-invalid-double-slash-comments': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'color-named': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'color-no-hex': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-url-no-scheme-relative': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-url-scheme-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-url-scheme-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'keyframes-name-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'number-max-precision': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'time-min-milliseconds': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'unit-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'unit-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'shorthand-property-no-redundant-values': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-no-vendor-prefix': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'custom-property-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'property-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'property-no-vendor-prefix': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'property-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-no-redundant-longhand-properties': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-no-important': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-property-unit-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-property-unit-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-property-value-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-property-value-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-single-line-max-declarations': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-operator-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-operator-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-class-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-combinator-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-combinator-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-id-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-attribute': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-class': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-combinators': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-compound-selectors': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-empty-lines': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-id': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-pseudo-class': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-specificity': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-type': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-max-universal': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-nested-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-no-qualifying-type': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-no-vendor-prefix': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-class-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-class-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-no-vendor-prefix': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-value-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'custom-media-pattern': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-no-vendor-prefix': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-whitelist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'comment-word-blacklist': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'max-nesting-depth': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-unknown-animations': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'color-hex-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'color-hex-length': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'font-family-name-quotes': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'font-weight-notation': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-comma-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-comma-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-comma-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-comma-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-max-empty-lines': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-name-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-parentheses-newline-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-parentheses-space-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-url-quotes': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-whitespace-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'number-leading-zero': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'number-no-trailing-zeros': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'string-quotes': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'length-zero-no-unit': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'unit-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-keyword-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-list-comma-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-list-comma-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-list-comma-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-list-comma-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'value-list-max-empty-lines': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'custom-property-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'property-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-bang-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-bang-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-colon-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-colon-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-colon-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-semicolon-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-semicolon-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-semicolon-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-semicolon-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'declaration-block-trailing-semicolon': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-closing-brace-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-closing-brace-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-closing-brace-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-closing-brace-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-closing-brace-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-opening-brace-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-opening-brace-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-opening-brace-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'block-opening-brace-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-brackets-space-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-operator-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-operator-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-attribute-quotes': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-combinator-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-combinator-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-descendant-combinator-no-non-space': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-class-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-class-parentheses-space-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-colon-notation': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-type-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-list-comma-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-list-comma-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-list-comma-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-list-comma-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'rule-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-colon-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-colon-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-name-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-parentheses-space-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-range-operator-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-feature-range-operator-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-query-list-comma-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-query-list-comma-newline-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-query-list-comma-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'media-query-list-comma-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-name-case': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-name-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-name-space-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-semicolon-newline-after': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'at-rule-semicolon-space-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'comment-empty-line-before': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'comment-whitespace-inside': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    indentation: true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    linebreaks: true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'max-empty-lines': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'max-line-length': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-eol-whitespace': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-missing-end-of-source-newline': true,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'no-empty-first-line': true,
  },
};
