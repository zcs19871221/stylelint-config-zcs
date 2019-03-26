module.exports = {
  defaultSeverity: 'error',
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
     * 检验calc语法正确性
     * @why
     * calc语法：
     * 1. 必须是一个表达式
     * 2. 参数之间必须有运算符
     * 3. 不能除0
     * 4. 操作符之间必须有空格
     * @wrong
     * @right
     */
    'function-calc-no-invalid': true,

    /**
     * @meaning
     * 禁止在`linear-gradient()`方法中使用无效的方向值
     * @why
     * @wrong
     * @right
     */
    'function-linear-gradient-no-nonstandard-direction': true,

    /**
     * @meaning
     * 禁止字符串中出现未转义换行
     * @why
     * 规范定义，字符串中不能直接包含换行。请使用\A或\00000a换行
     * @wrong
     * a {
     *  content: "first
     *  second";
     * }
     * @right
     * a {
     * content: "first\Asecond";
     * }
     */
    'string-no-newline': true,

    /**
     * @meaning
     * 禁止使用未知的长度单元
     * @why
     * @wrong
     * width: 10pixels;
     * @right
     * width: 10px;
     */
    'unit-no-unknown': true,

    /**
     * @meaning
     * 禁止未知的属性
     * @why
     * @wrong
     * a {
     *   colr: blue;
     * }
     * @right
     * a {
     *   color: blue;
     * }
     */
    'property-no-unknown': true,

    /**
     * @meaning
     * 禁止在`keyframes`语法后使用import定义
     * @why
     * 有些浏览器下，该语法不生效
     * @wrong
     * @right
     */
    'keyframe-declaration-no-important': true,

    /**
     * @meaning
     * 禁止在块声明语句中定义重复的属性
     * 但是连续的相同属性不同值是例外，为了兼容低版本浏览器
     * @why
     * @wrong
     * p {
     *  font-size: 16px;
     *  font-weight: 400;
     *  font-size: 1rem;
     * }
     * @right
     * p {
     *  font-size: 16px;
     *  font-size: 1rem;
     *  font-weight: 400;
     * }
     */
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],

    /**
     * @meaning
     * 禁止缩写名属性覆盖完整属性
     * @why
     * 多是意外操作
     * @wrong
     * a {
     *   padding-left: 10px;
     *   padding: 20px;
     * }
     * @right
     * a { padding: 10px; padding-left: 20px; }
     * a { padding: 10px;}
     */
    'declaration-block-no-shorthand-property-overrides': true,

    /**
     * @meaning
     * 禁止出现空块
     * @why
     * @wrong
     * {}
     * @right
     */
    'block-no-empty': true,

    /**
     * @meaning
     * 禁止出现不正确的伪类选择器
     * @why
     * @wrong
     * a:unkown {}
     * @right
     * a:hover {}
     */
    'selector-pseudo-class-no-unknown': true,

    /**
     * @meaning
     * 禁止出现不正确的伪元素选择器
     * @why
     * @wrong
     * a::element{}
     * @right
     * a::after{}
     */
    'selector-pseudo-element-no-unknown': true,

    /**
     * @meaning
     * 禁止出现未知的类型（tag）选择器
     * @why
     * @wrong
     * @right
     */
    'selector-type-no-unknown': true,

    /**
     * @meaning
     * 禁止出现未知的媒体特征名
     * @why
     * @wrong
     * @media screen and(unknow) {}
     * @right
     * @media all and (monochrome) {}
     */
    'media-feature-name-no-unknown': true,

    /**
     * @meaning
     * 禁止不正确的`@rule`语法
     * @why
     * @wrong
     * @unknown {}
     * @right
     * @charset "UTF-8";
     */
    'at-rule-no-unknown': true,

    /**
     * @meaning
     * 禁止空注释
     * @why
     * @wrong
     * @right
     */
    'comment-no-empty': true,

    /**
     * @meaning
     * 禁止高优先级规则出现在低优先级规则之前
     * @why
     * 两个同优先级的规则，在源代码中后定义的优先级高。因此为了和这个默认规则一致，
     * 强制要求css规则都按照先出现的优先级低，后出现高的顺序排列。
     * @wrong
     *  #container a { top: 10px; } a { top: 0; }
     * @right
     *  a { top: 0; } #container a { top: 10px; }
     */
    'no-descending-specificity': true,

    /**
     * @meaning
     * 禁止在`import`语法中导入重复的内容
     * @why
     * @wrong
     * @right
     */
    'no-duplicate-at-import-rules': true,

    /**
     * @meaning
     * 禁止重复的选择器
     * @why
     * @wrong
     * @right
     */
    'no-duplicate-selectors': true,

    /**
     * @meaning
     * 禁止出现空的css文件
     * @why
     * @wrong
     * @right
     */
    'no-empty-source': true,

    /**
     * @meaning
     * 禁止出现额外的分号
     * @why
     * @wrong
     * @right
     */
    'no-extra-semicolons': true,

    /**
     * @meaning
     * 禁止出现无效的`//`符号
     * @why
     * css不支持该语法作为注释
     * @wrong
     * @right
     */
    'no-invalid-double-slash-comments': true,
  },
};
