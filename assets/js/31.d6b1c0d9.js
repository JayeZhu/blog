(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{448:function(s,t,a){"use strict";a.r(t);var n=a(15),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[s._v("变量对象（Variable Object，VO）是执行上下文重要组成部分——数据作用域，存储了在执行上下文中定义的所有变量声明和函数声明，保证代码执行时对变量和函数的正确访问。")]),s._v(" "),a("h2",{attrs:{id:"种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#种类"}},[s._v("#")]),s._v(" 种类")]),s._v(" "),a("p",[s._v("通过不同执行上下文，可以简单分为：")]),s._v(" "),a("ul",[a("li",[s._v("全局执行上下文对应的全局执行上下文变量对象，其实就是全局对象")]),s._v(" "),a("li",[s._v("函数执行上下文对应的函数执行上下文变量对象，其实就是活动对象")])]),s._v(" "),a("h3",{attrs:{id:"全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局对象"}},[s._v("#")]),s._v(" 全局对象")]),s._v(" "),a("p",[s._v("其中全局执行上下文变量对象其实就是全局对象，我们简单看下全局对象")]),s._v(" "),a("blockquote",[a("p",[s._v("全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符，通过全局对象，可以访问所有其他预定义的对象、函数和属性。全局对象不是任何对象的属性，所以它没有名称")])]),s._v(" "),a("p",[s._v("在浏览器中，全局对象是 window 对象；在 Node 中，是 global 对象。前端开发中主要用的是 window 对象，\n一些全局属性比如，变量 path、screen，方法 parseInt()、postMessage() 等。")]),s._v(" "),a("p",[s._v("简单总结一下全局对象的特点：")]),s._v(" "),a("ul",[a("li",[s._v("全局对象在执行所有代码前被创建")]),s._v(" "),a("li",[s._v("全局对象一致存在，直到程序结束")]),s._v(" "),a("li",[s._v("全局对象保存了全局上下文中所有的变量和函数声明")]),s._v(" "),a("li",[s._v("全局变量对象位于作用域链的顶端")])]),s._v(" "),a("h3",{attrs:{id:"活动对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#活动对象"}},[s._v("#")]),s._v(" 活动对象")]),s._v(" "),a("p",[s._v("在进入函数执行上下文中，函数执行上下文对应的变量对象激活，变成活动对象(Activeion Object,AO)。但其实活动对象和变量对象是同一种东西，只不过变量对象在激活前，不可再 JavaScript 环境中访问，而被激活的活动对象中的各种属性才可以访问。")]),s._v(" "),a("p",[s._v("活动对象是在进入函数上下文时被创建的，它通过函数的 arguments 属性初始化，这个属性的属性值是 Arguments 对象，包括如下属性：")]),s._v(" "),a("ul",[a("li",[s._v("callee：指向当前函数的引用")]),s._v(" "),a("li",[s._v("length：真正传递的参数个数")]),s._v(" "),a("li",[s._v("indexes-properties：索引值和属性值的类数组列表")])]),s._v(" "),a("h2",{attrs:{id:"两个阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个阶段"}},[s._v("#")]),s._v(" 两个阶段")]),s._v(" "),a("p",[s._v("可执行代码分为解析和执行两个阶段，对应的变量对象的创建和赋值两阶段。")]),s._v(" "),a("h3",{attrs:{id:"创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[s._v("#")]),s._v(" 创建阶段")]),s._v(" "),a("p",[s._v("在代码解析阶段，会根据执行上下文中的变量声明和函数声明来创建变量对象，这时的变量对项被 arguments 属性初始化，内容包括：")]),s._v(" "),a("ul",[a("li",[s._v("变量声明\n"),a("ul",[a("li",[s._v("通过 var 声明的变量")]),s._v(" "),a("li",[s._v("由名称和对应值 (undefined) 组成，作为变量对象的属性被创建")]),s._v(" "),a("li",[s._v("如果变量名称跟已经声明的形参或函数相同，则变量声明"),a("strong",[s._v("不会干扰")]),s._v("已经存在的这类属性")])])]),s._v(" "),a("li",[s._v("函数声明\n"),a("ul",[a("li",[s._v("有名称和对应值 (函数对象(function-object)，指向堆函数的引用)组成，作为变量对象的属性被创建")]),s._v(" "),a("li",[s._v("如果变量对象存在相同名称的属性，则完全"),a("strong",[s._v("替换")]),s._v("这个属性")])])]),s._v(" "),a("li",[s._v("函数的所有形参\n"),a("ul",[a("li",[s._v("存在于函数执行上下文")]),s._v(" "),a("li",[s._v("有名称和对应值组成，作为变量对象的属性被创建")]),s._v(" "),a("li",[s._v("没有实参，属性值设为 undefined\n来一个例子看一下：")])])])]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("foo(1)执行前会创建函数执行上下文，其中包括函数执行上下文的变量对象VO，激活后成为活动对象 AO，呈现如下")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" reference to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("有几个注意的点：")]),s._v(" "),a("ul",[a("li",[s._v("声明的 a 不影响形参 a，值是 1")]),s._v(" "),a("li",[s._v("声明的 b 默认值是 undefined")]),s._v(" "),a("li",[s._v("c 和 d 虽然都是函数，但声明方式不一样：\n"),a("ul",[a("li",[s._v("c 是声明的函数，值是函数声明及指向")]),s._v(" "),a("li",[s._v("d 是声明的变量，然后赋值了方法，所以还是变量，值为 undefined")])])])]),s._v(" "),a("h3",{attrs:{id:"赋值阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值阶段"}},[s._v("#")]),s._v(" 赋值阶段")]),s._v(" "),a("p",[s._v("在代码执行阶段，ui顺序指向代码，根据代码，修改变量对象的值。")]),s._v(" "),a("p",[s._v("上面的 AO 会变为：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  b"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  c"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" refrence to "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" refrence to FunctionExpression "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript深入之变量对象"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);