(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{504:function(s,a,e){"use strict";e.r(a);var t=e(15),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("loader 用于对模块的源代码进行转换")])]),s._v(" "),e("p",[s._v("webpack 只能处理 js，需要其他的 loader 来处理除 js 以外的文件。")]),s._v(" "),e("p",[s._v("loader 需要安装到本地")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm i --save-dev style-loader css-loader\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用 loader 有三种方式：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("配置：module.rules 可以配置多个 loader，很简洁")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  module"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rules"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        test"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.css$")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 正则获取末端为 .css，即获取 css 文件")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack 读取 loader 从右往左，从下往上")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 先处理 css，再生成 style 元素，因此 style-loader 在前")]),s._v("\n        use"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("内联：使用 import 或任何等效于 import 的方式指定 loader，使用 ! 将 loader 分开")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Styles "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader!css-loader?modules!./styles.css'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("后面 "),e("code",[s._v("?modules!./styles.css")]),s._v(" 是传参。")]),s._v(" "),e("blockquote",[e("p",[s._v("尽可能使用 module.rules，减少源码中的代码量，出错时快速调试和定位")])])]),s._v(" "),e("li",[e("p",[s._v("CLI：在 package.json 的 脚本中添加")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这会对 .jade 使用 jade-loader，对 .css 使用 style-loader 和 css-loader")])])]),s._v(" "),e("h2",{attrs:{id:"文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[s._v("#")]),s._v(" 文件")]),s._v(" "),e("ul",[e("li",[s._v("raw-loader：加载文件原始内容（utf-8）")]),s._v(" "),e("li",[s._v("file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)")]),s._v(" "),e("li",[s._v("url-loader：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给file-loader处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)")]),s._v(" "),e("li",[s._v("source-map-loader：加载额外的 Source Map 文件，以方便断点调试")]),s._v(" "),e("li",[s._v("svg-inline-loader：将压缩后的 SVG 内容注入代码中")]),s._v(" "),e("li",[s._v("image-loader：加载并且压缩图片文件")]),s._v(" "),e("li",[s._v("json-loader 加载 JSON 文件（默认包含）")])]),s._v(" "),e("h2",{attrs:{id:"语法转换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法转换"}},[s._v("#")]),s._v(" 语法转换")]),s._v(" "),e("ul",[e("li",[s._v("babel-loader 使用 Babel 加载 ES2015+ 代码并将其转换为 ES5")]),s._v(" "),e("li",[s._v("ts-loader 像加载 JavaScript 一样加载 TypeScript 2.0+")]),s._v(" "),e("li",[s._v("awesome-typescript-loader：将 TypeScript 转换成 JavaScript，性能优于 ts-loader")])]),s._v(" "),e("h2",{attrs:{id:"语法检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语法检查"}},[s._v("#")]),s._v(" 语法检查")]),s._v(" "),e("ul",[e("li",[s._v("eslint-loader：通过 ESLint 检查 JavaScript 代码")]),s._v(" "),e("li",[s._v("tslint-loader：通过 TSLint检查 TypeScript 代码")])]),s._v(" "),e("h2",{attrs:{id:"模板"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板"}},[s._v("#")]),s._v(" 模板")]),s._v(" "),e("ul",[e("li",[s._v("html-loader 将 HTML 导出为字符串，需要传入静态资源的引用路径")]),s._v(" "),e("li",[s._v("pug-loader 加载 Pug 和 Jade 模板并返回一个函数")]),s._v(" "),e("li",[s._v("markdown-loader 将 Markdown 编译为 HTML")]),s._v(" "),e("li",[s._v("react-markdown-loader 使用 markdown-parse 解析器将 Markdown 编译为 React 组件")]),s._v(" "),e("li",[s._v("posthtml-loader 使用 PostHTML 加载并转换 HTML 文件")]),s._v(" "),e("li",[s._v("handlebars-loader 将 Handlebars 文件编译为 HTML")]),s._v(" "),e("li",[s._v("markup-inline-loader 将 SVG/MathML 文件内嵌到 HTML 中。在将图标字体或 CSS 动画应用于 SVG 时，此功能非常实用。")]),s._v(" "),e("li",[s._v("twig-loader 编译 Twig 模板并返回一个函数")]),s._v(" "),e("li",[s._v("remark-loader 通过 remark 加载 markdown，且支持解析内容中的图片")])]),s._v(" "),e("h2",{attrs:{id:"样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式"}},[s._v("#")]),s._v(" 样式")]),s._v(" "),e("ul",[e("li",[s._v("style-loader 将模块导出的内容作为样式并添加到 DOM 中")]),s._v(" "),e("li",[s._v("css-loader 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码")]),s._v(" "),e("li",[s._v("less-loader 加载并编译 LESS 文件")]),s._v(" "),e("li",[s._v("sass-loader 加载并编译 SASS/SCSS 文件")]),s._v(" "),e("li",[s._v("stylus-loader 加载并编译 Stylus 文件")]),s._v(" "),e("li",[s._v("postcss-loader 使用 PostCSS 加载并转换 CSS/SSS 文件")])]),s._v(" "),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),e("p",[s._v("mocha-loader 使用 mocha (Browser/NodeJS) 进行测试")]),s._v(" "),e("h2",{attrs:{id:"框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[s._v("#")]),s._v(" 框架")]),s._v(" "),e("ul",[e("li",[s._v("vue-loader 加载并编译 Vue 组件")]),s._v(" "),e("li",[s._v("angular2-template-loader 加载并编译 Angular 组件")])])])}),[],!1,null,null,null);a.default=r.exports}}]);