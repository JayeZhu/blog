(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{568:function(s,t,n){"use strict";n.r(t);var a=n(15),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"什么是-commonjs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是-commonjs"}},[s._v("#")]),s._v(" 什么是 CommonJS")]),s._v(" "),n("p",[s._v("Node.js 对前端的发展具有极大的促进作用，它带来的 CommonJS 模块化规范如下：在 Node.js 中，每一个文件就是一个模块，具有单独的作用域，对其他文件是不可见的。")]),s._v(" "),n("p",[s._v("CommonJS 规定每个文件就是一个模块，有独立的作用域。每个模块内部，都有一个 module 对象，代表当前模块。通过它来导出 API，它有以下属性：\nid 模块的识别符，通常是带有绝对路径的模块文件名；\nfilename 模块的文件名，带有绝对路径；\nloaded 返回一个布尔值，表示模块是否已经完成加载；\nparent 返回一个对象，表示调用该模块的模块；\nchildren 返回一个数组，表示该模块要用到的其他模块；\nexports 表示模块对外输出的值。")]),s._v(" "),n("h2",{attrs:{id:"commonjs-特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-特点"}},[s._v("#")]),s._v(" CommonJS 特点")]),s._v(" "),n("p",[s._v("CommonJS 的规范有以下特点：")]),s._v(" "),n("ul",[n("li",[s._v("文件即模块，文件内所有代码都运行在独立的作用域，因此不会污染全局空间。")]),s._v(" "),n("li",[s._v("模块可以被多次引用、加载。在第一次被加载时，会被缓存，之后都从缓存中直接读取结果。")]),s._v(" "),n("li",[s._v("加载某个模块，就是引入该模块的 module.exports 属性。")]),s._v(" "),n("li",[s._v("module.exports 属性输出的是值的拷贝，一旦这个值被输出，模块内再发生变化不会影响到输出的值。")]),s._v(" "),n("li",[s._v("模块加载顺序按照代码引入的顺序。")])]),s._v(" "),n("h2",{attrs:{id:"commonjs-导出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-导出"}},[s._v("#")]),s._v(" CommonJS 导出")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("TestModule")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exports'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nexports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("TestModule")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'exports'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上面两种方式结果是一样的，module.exports和exports的区别可以理解为exports是module.exports的引用，如果在exports调用之前调用了exports=...，那么就无法再通过exports来导出模块内容，除非通过exports=module.exports重新设置exports的指向。")]),s._v(" "),n("h2",{attrs:{id:"commonjs-导入"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-导入"}},[s._v("#")]),s._v(" CommonJS 导入")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mymodule "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./MyModule'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//如果没有后缀，会自动按照.js、.json和.node的次序进行补齐查找")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"commonjs-加载"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-加载"}},[s._v("#")]),s._v(" CommonJS 加载")]),s._v(" "),n("ul",[n("li",[s._v("优先从缓存中加载")]),s._v(" "),n("li",[s._v("如果缓存中没有，检查是否是核心模块，如果是直接加载")]),s._v(" "),n("li",[s._v("如果不是核心模块，检查是否是文件模块，解析路径，根据解析出的路径定位文件，然后执行并加载")]),s._v(" "),n("li",[s._v("如果以上都不是，沿当前路径向上逐级递归，直到根目录的node_modules目录")])])])}),[],!1,null,null,null);t.default=e.exports}}]);