(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{471:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("异步编程方式发展至今，经历过回调函数、Promise、Generator、async+await")]),s._v(" "),a("h2",{attrs:{id:"同步与异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步与异步"}},[s._v("#")]),s._v(" 同步与异步")]),s._v(" "),a("h3",{attrs:{id:"同步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步"}},[s._v("#")]),s._v(" 同步")]),s._v(" "),a("p",[s._v("同步就是执行代码时，会阻塞后续代码的执行，直到该代码返回结果，后续代码得以执行。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[s._v("#")]),s._v(" 异步")]),s._v(" "),a("p",[s._v("异步是执行代码时，不会阻塞后续代码执行，并且该代码不会马上获取返回结果，一般通过回调函数来处理这个返回结果。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'myImage.png'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" blob "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "img"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 之后呈现图片")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"为什么需要异步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要异步"}},[s._v("#")]),s._v(" 为什么需要异步")]),s._v(" "),a("p",[s._v("JS 是单线程的，如果 JS 都是同步代码，那么那些需要很长时间才能返回结果必然会严重阻塞后续代码的执行。这种情况不仅浪费性能，还拖累整个脚本的执行，显得很卡。而异步就能够将这种需要长时间的代码放到一边执行，后续代码也不阻塞。因此会 JS编程中 会大量使用异步编程。")]),s._v(" "),a("h2",{attrs:{id:"回调函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回调函数"}},[s._v("#")]),s._v(" 回调函数")]),s._v(" "),a("p",[s._v("回调函数是作为参数传递给后台执行的其他函数，这些函数执行完后就会调用回调函数。是一种老套的异步编程方式，常用于 Node 中。")])])}),[],!1,null,null,null);t.default=e.exports}}]);