module.exports = {
  defaultSeverity: 'error',
  rules: {
    /**
     * @meaning
     * @why
     * @wrong
     * @right
     */
    'function-name-case': 'lower',

    /**
     * @meaning
     * url地址强制使用括号括起来
     * @why
     * 如果不用括号括起来，使用react时候，地址里面如果有特殊符号比如}，会错误解析
     * 因为react不知道哪个位置是url边界
     * @wrong
     * @right
     */
    'function-url-quotes': 'always',

    /**
     * @meaning
     * 小数点前必须加0
     * @why
     * @wrong
     * @right
     */
    'number-leading-zero': 'always',

    /**
     * @meaning
     * 禁止小数点后末尾是0
     * @why
     * @wrong
     * @right
     */
    'number-no-trailing-zeros': true,

    /**
     * @meaning
     * 禁止给0长度后面加单位
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
    'value-keyword-case': 'lower',

    /**
     * @meaning
     * 伪元素选择器永远使用::双冒号
     * @why
     * @wrong
     * @right
     */
    'selector-pseudo-element-colon-notation': 'double',

    /**
     * @meaning
     * 标签选择器必须小写
     * @why
     * @wrong
     * @right
     */
    'selector-type-case': 'lower',

    /**
     * @meaning
     * 除了通用字体外，使用引号括起所有字体
     * @why
     * @wrong
     * a { font-family: Arial, sans-serif; }
     * @right
     * a { font-family: 'Arial', sans-serif; }
     */
    'font-family-name-quotes': 'always-unless-keyword',

    /**
     * @meaning
     * 换行符必须是unix风格的`\n`
     * @why
     * @wrong
     * @right
     */
    linebreaks: 'unix',
  },
};
