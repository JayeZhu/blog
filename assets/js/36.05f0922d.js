(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{454:function(a,s,t){"use strict";t.r(s);var r=t(15),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("本章主要看 JS 是如何存储数据类型的")]),a._v(" "),t("h2",{attrs:{id:"内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存模型"}},[a._v("#")]),a._v(" 内存模型")]),a._v(" "),t("p",[a._v("JS 中有三种重要的数据结构：栈、堆、池。其中基本类型存在栈中、引用数据类型和闭包中变量存放在堆中，池存放常量，常归类为栈。")]),a._v(" "),t("h3",{attrs:{id:"栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[a._v("#")]),a._v(" 栈")]),a._v(" "),t("p",[a._v("栈（stack）是一种后进先出的数据结构（LIFO：last-in，first-out）。这种结构是一种特殊的线性表，它有栈顶和栈底，对应着有栈顶指针和栈底指针。")]),a._v(" "),t("p",[a._v("其中后进先出的进出代表栈的入栈和出栈操作：")]),a._v(" "),t("p",[a._v("来看看如何存储基本数据类型的：")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("当执行这段代码时，需要先编译，并创建执行上下文，其中执行上下文中的变量对象就会变成")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("VO")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  num"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("undefined")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("随后执行上下文压栈，接着执行赋值操作 "),t("code",[a._v("num = 1")]),a._v("，这个时候判断变量值是基础数据类型，便在储存值的栈的一块内存空间中储存 1，通过栈的指针在栈顶获取到值 1，并将 1 赋值给 num")]),a._v(" "),t("h3",{attrs:{id:"堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[a._v("#")]),a._v(" 堆")]),a._v(" "),t("p",[a._v("堆是一种树状结构，类似 JSON 格式的数据，以 key-value (键值对)的形式存储数据。不同于堆，他跟 JSON 一样没有存储顺序。引用数据类型的值是保存在堆内存中的对象，这个对象并不会被直接访问，那是怎么访问的呢？")]),a._v(" "),t("p",[a._v("复杂数据类型的变量声明存放在栈中，存放的属性是变量名，属性值是一个地址，这个指针是对")]),a._v(" "),t("h3",{attrs:{id:"常量池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量池"}},[a._v("#")]),a._v(" 常量池")]),a._v(" "),t("h3",{attrs:{id:"队列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[a._v("#")]),a._v(" 队列")]),a._v(" "),t("p",[a._v("队列是一种先进先出的结构（FIFO：first-in，first-out），同时是事件循环的基础结构。")]),a._v(" "),t("h2",{attrs:{id:"变量存放"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量存放"}},[a._v("#")]),a._v(" 变量存放")]),a._v(" "),t("p",[a._v("JS 通过堆栈存储变量，那么是如何存储的呢：")]),a._v(" "),t("ul",[t("li",[a._v("基本数据类型保存在栈中")]),a._v(" "),t("li",[a._v("引用数据类型保存在堆中")]),a._v(" "),t("li",[a._v("闭包保存在堆中")])]),a._v(" "),t("h2",{attrs:{id:"内存空间管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存空间管理"}},[a._v("#")]),a._v(" 内存空间管理")]),a._v(" "),t("p",[a._v("内存的声明周期分为三个阶段：")]),a._v(" "),t("ul",[t("li",[a._v("内存分配：Js 在定义变量是就完成了内存分配")]),a._v(" "),t("li",[a._v("内存使用：实际就是内存的读写")]),a._v(" "),t("li",[a._v("内存释放：使用完毕后通过垃圾回收机制回收垃圾")])])])}),[],!1,null,null,null);s.default=e.exports}}]);