module.exports = {
  defaultSeverity: 'error',
  rules: {
    /**
     * @meaning
     * 禁止使用协议相关地址(//开头)
     * @why
     * 协议相关地址的作用就是让你使用当前协议获取资源地址
     * 是为了使用http协议访问https静态资源的兼容行为。
     * 应该永远使用https协议保证安全性
     * @wrong
     * a {
     *   background: url("//www.google.com/file.jpg");
     * }
     * @right
     * a {
     *   background: url("./file.jpg");
     * }
     */
    'function-url-no-scheme-relative': true,

    /**
     * @meaning
     * 限制数字的最多小数点位数为2
     * @why
     * 有的浏览器只保留小数点两位，保持一致
     * @wrong
     * @right
     */
    'number-max-precision': 3,

    /**
     * @meaning
     * 简写属性不允许写冗余值
     * @why
     * @wrong
     * a { margin: 1px 1px 1px 1px; }
     * a { margin: 1px 1px }
     * @right
     * a { margin: 1px}
     */
    'shorthand-property-no-redundant-values': true,

    /**
     * @meaning
     * 能用简写的属性尽量使用简写
     * @why
     * @wrong
     * @right
     */
    'declaration-block-no-redundant-longhand-properties': true,

    /**
     * @meaning
     * 禁止使用`!import`
     * @why
     * @wrong
     * @right
     */
    'declaration-no-important': true,

    /**
     * @meaning
     * 一行只允许一个声明语句
     * @why
     * @wrong
     * a { color: pink; top: 3px; }
     * @right
     * a {
     *   color: pink;
     *   top: 3px;
     * }
     */
    'declaration-block-single-line-max-declarations': 1,

    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'selector-no-qualifying-type': true,

    /**
     * @meaning
     * 最大嵌套层为2
     * @why
     * @wrong
     * @right
     */
    'max-nesting-depth': 2,

    /**
     * @meaning
     * 禁止未知的动画名称
     * @why
     * @wrong
     * @right
     */
    'no-unknown-animations': true,
  },
};
