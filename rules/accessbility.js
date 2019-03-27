module.exports = {
  defaultSeverity: 'error',
  plugins: ['stylelint-a11y'],
  rules: {
    /**
     * @meaning
     * 禁止使用css创造内容除非是空字符串或使用aria-label标签属性
     * @why
     * @wrong
     * .foo:: before {
     *   content: 'Price: $50';
     * }
     * @right
     * .foo {
     *   content: '';
     * }
     * .foo {
     *   content: attr(aria-label);
     * }
     */
    'a11y/content-property-no-static-value': true,

    /**
     * @meaning
     * 禁止字体小于15px
     * @why
     * @wrong
     * @right
     */
    'a11y/font-size-is-readable': true,

    /**
     * @meaning
     * 强制使用垂直节奏
     * 获取一个基线(正文的行高)，然后页面上的所有行高和空白都设置为基线的倍数
     * 限制line-height为24px的倍数或大于1.6倍
     * @why
     * https://zellwk.com/blog/why-vertical-rhythms/
     * https://zellwk.com/blog/responsive-vertical-rhythm/
     * @wrong
     * .foo {
     *   transition: width 2s;
     * }
     * @right
     * .foo {
     *   transition: width 2s;
     * }
     * @media screen and (prefers-reduced-motion: reduce) {
     *   .foo {
     *     transition: none;
     *   }
     * }
     */
    'a11y/line-height-is-vertical-rhythmed': true,

    /**
     * @meaning
     * 所有动画和过渡效果必须有对应的`prefers-reduced-motion:reduce`at rules
     * @why
     * 为了支持ios7为了针对3d眩晕患者提供的手机配置项：减少动画效果
     * https://webkit.org/blog/7551/responsive-design-for-motion/
     * @wrong
     * @right
     */
    'a11y/media-prefers-reduced-motion': true,

    /**
     * @meaning
     * 设置color的话，必须设置`prefers-color-scheme:reduce`at rules
     * @why
     * 浏览器必须支持手机的明暗模式
     * @wrong
     * .foo {
     *   color: red;
     * }
     * @right
     * .foo {
     *   color: red;
     * }
     * @media screen and (prefers-color-scheme: dark) {
     *   .foo {
     *     color: grey;
     *   }
     * }
     */
    'a11y/media-prefers-color-scheme': true,

    /**
     * @meaning
     * 禁止使用过时的属性
     * @why
     * @wrong
     * @right
     */
    'a11y/no-obsolete-attribute': true,

    /**
     * @meaning
     * 禁止使用过时的元素
     * @why
     * @wrong
     * @right
     */
    'a11y/no-obsolete-element': true,

    /**
     * @meaning
     * 要求文本段的长短在45-80ch之间
     * @why
     * 提高可访问性
     * https://medium.com/@matuzo/writing-css-with-accessibility-in-mind-8514a0007939
     * @wrong
     * .foo {
     *   text-transform: lowercase;
     *   max-width: 40ch;
     * }
     * @right
     * .foo {
     *   max-width: 65ch;
     * }
     */
    'a11y/no-spread-text': true,

    /**
     * @meaning
     * 不要给聚焦元素设置outline:none
     * @why
     * outline会给可聚焦元素得到聚焦后一个视觉反馈，
     * 如果删除了，视障人士无法有效得知聚焦情况
     * https://a11yproject.com/posts/never-remove-css-outlines/
     * @wrong
     * .foo:focus {
     *   outline: 0;
     * }
     * .foo:focus {
     *   outline: none;
     * }
     * @right
     */
    'a11y/no-outline-none': true,

    /**
     * @meaning
     * 禁止使用`text-align: justify;`属性
     * @why
     * 对齐选项会造成段落中出现大段的空白，不利于阅读
     * @wrong
     * .foo {
     *   text-align: justify;
     * }
     * @right
     */
    'a11y/no-text-align-justify': true,

    /**
     * @meaning
     * a标签如果设置了hover伪类样式，必须设置focus伪类
     * @why
     * 要对使用键盘的用户提供同样的视觉效果
     * @wrong
     * a:hover {
     * }
     * @right
     * a:hover,
     * a:focus {
     * }
     */
    'a11y/selector-pseudo-class-focus': true,
  },
};
