module.exports = {
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

    //   /**
    //    * @meaning
    //    *
    //    * @why
    //    * @wrong
    //    * @right
    //    */
    //   'a11y/no-spread-text': true,

    //   /**
    //    * @meaning
    //    *
    //    * @why
    //    * @wrong
    //    * @right
    //    */
    //   'a11y/no-outline-none': true,

    //   /**
    //    * @meaning
    //    *
    //    * @why
    //    * @wrong
    //    * @right
    //    */
    //   'a11y/no-text-align-justify': true,

    //   /**
    //    * @meaning
    //    *
    //    * @why
    //    * @wrong
    //    * @right
    //    */
    //   'a11y/selector-pseudo-class-focus': true,
  },
};
