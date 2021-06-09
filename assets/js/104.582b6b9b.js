(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{526:function(t,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h3",{attrs:{id:"css-选择器和优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器和优先级"}},[t._v("#")]),t._v(" CSS 选择器和优先级")]),t._v(" "),a("p",[t._v("CSS 选择器有：")]),t._v(" "),a("ul",[a("li",[t._v("id 选择器")]),t._v(" "),a("li",[t._v("类选择器")]),t._v(" "),a("li",[t._v("伪类选择器")]),t._v(" "),a("li",[t._v("元素选择器")]),t._v(" "),a("li",[t._v("伪元素选择器")]),t._v(" "),a("li",[t._v("后代选择器")]),t._v(" "),a("li",[t._v("子选择器")]),t._v(" "),a("li",[t._v("相邻兄弟选择器")]),t._v(" "),a("li",[t._v("标签选择器")]),t._v(" "),a("li",[t._v("通配符选择器")])]),t._v(" "),a("p",[t._v("优先级为：")]),t._v(" "),a("p",[t._v("首先 !important 优先级最高，如果同时出现，再比较")]),t._v(" "),a("ul",[a("li",[t._v("行内样式优先级 1000")]),t._v(" "),a("li",[t._v("id 选择器 100")]),t._v(" "),a("li",[t._v("类选择器、伪类选择器、属性选择器 10")]),t._v(" "),a("li",[t._v("元素选择器、伪元素选择器 1")])]),t._v(" "),a("p",[t._v("以上数字会跌叠加，但是不会进位，从左到右，大的优先级高，除此之外")]),t._v(" "),a("ul",[a("li",[t._v("通用选择器、子选择器、相邻兄弟选择器权值相当于 0")]),t._v(" "),a("li",[t._v("继承优先级最低")])]),t._v(" "),a("h3",{attrs:{id:"浏览器是怎么解析-css-选择器的-为什么要这么设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是怎么解析-css-选择器的-为什么要这么设计"}},[t._v("#")]),t._v(" 浏览器是怎么解析 CSS 选择器的，为什么要这么设计")]),t._v(" "),a("p",[t._v("样式系统从关键选择器开始匹配，然后左移查找它的祖先元素，一致找到最左边选择器，期间出现不匹配就会放弃该队则。")]),t._v(" "),a("p",[t._v("从右往左是因为避免耗时费力，关键选择器向左，出现不匹配就会推出，而从左往右就会读到最后面才可能发现不匹配。")]),t._v(" "),a("h3",{attrs:{id:"哪些css属性是可以继承的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哪些css属性是可以继承的"}},[t._v("#")]),t._v(" 哪些CSS属性是可以继承的")]),t._v(" "),a("p",[t._v("每一个属性在定义的时候都给出了属性是否有继承性，一个有继承性的属性会在没有指定值的时候，会使用父元素的值作为自己的属性")]),t._v(" "),a("p",[t._v("一般由继承性的值有字体属性 font-family、font-size等，文本属性 text-indent、text-align、line-height，表格列表属性 list-style 等，还有光标属性 cursor 和 元素可见性 visibility。")]),t._v(" "),a("p",[t._v("当然，我们可以设置元素值为 inherit 让他实现继承")]),t._v(" "),a("h3",{attrs:{id:"伪元素和伪类有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#伪元素和伪类有什么区别"}},[t._v("#")]),t._v(" 伪元素和伪类有什么区别")]),t._v(" "),a("p",[t._v("首先伪元素和伪类都是格式化文档树以外的内容，主要区别在于")]),t._v(" "),a("ul",[a("li",[t._v("伪元素一般使用 :: 表示，伪类使用 : 表示，为了兼容老浏览器，也有使用 ：表示伪元素")]),t._v(" "),a("li",[t._v("伪元素值创建不在文档树的元素，并添加样式，而伪类是元素处于某种状态时，为其添加样式")])]),t._v(" "),a("h3",{attrs:{id:"说一下盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下盒模型"}},[t._v("#")]),t._v(" 说一下盒模型")]),t._v(" "),a("p",[t._v("CSS 中盒模型分为标准盒模型和 IE 盒模型。盒模型有 content、padding、border、padding 组成。标准盒模型和 IE 和模型区别在于：")]),t._v(" "),a("ul",[a("li",[t._v("标准盒模型的宽高范围只包括 content")]),t._v(" "),a("li",[t._v("IE 盒模型的宽高范围包括 content、padding、border")])]),t._v(" "),a("p",[t._v("可以通过 box-sizing 切换元素的盒模型：")]),t._v(" "),a("ul",[a("li",[t._v("当设为 content-box 时为标准盒模型")]),t._v(" "),a("li",[t._v("当设为 border-box 时为IE和模型")])]),t._v(" "),a("h2",{attrs:{id:"布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),a("h3",{attrs:{id:"常见的布局单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的布局单位"}},[t._v("#")]),t._v(" 常见的布局单位")]),t._v(" "),a("p",[t._v("常见的布局单位有像素，百分比，em，rem，vw/vh")]),t._v(" "),a("ul",[a("li",[t._v("像素：像素是布局的基础，表示终端屏幕所能显示的最小的区域，主要分为物理像素和css像素\n"),a("ul",[a("li",[t._v("物理像素：与设备硬件有关，是固定的")]),t._v(" "),a("li",[t._v("CSS 像素：是开发所用到的一种抽象单位")])])]),t._v(" "),a("li",[t._v("百分比：这种数值会跟随屏幕的宽高而发生改变，适用于做响应式的效果")]),t._v(" "),a("li",[t._v("em 和 rem 是比像素更灵活的相对长度单位，区别在于\n"),a("ul",[a("li",[t._v("em：是相对于父元素的长度单位")]),t._v(" "),a("li",[t._v("rem：是相对于根元素的长度单位，能够通过统一设置达到简单的响应式效果")])])]),t._v(" "),a("li",[t._v("vw 和 vh 是与窗口相关的单位\n"),a("ul",[a("li",[t._v("vw 是相对于窗口的宽度")]),t._v(" "),a("li",[t._v("vh 是相对于窗口的高度")])])])]),t._v(" "),a("h3",{attrs:{id:"布局单位-px、em、rem-的区别和使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局单位-px、em、rem-的区别和使用场景"}},[t._v("#")]),t._v(" 布局单位 px、em、rem 的区别和使用场景")]),t._v(" "),a("p",[t._v("首先回答这三个是什么（见上一条）")]),t._v(" "),a("p",[t._v("区别在于：")]),t._v(" "),a("ul",[a("li",[t._v("px 是固定单位，而 em 和 rem 是相对单位，更适合响应式布局")]),t._v(" "),a("li",[t._v("em 是相对父元素的，而 rem 是相对于根元素的，在进行设置时，rem 更方便进行统一设定")])]),t._v(" "),a("p",[t._v("使用场景：")]),t._v(" "),a("ul",[a("li",[t._v("对于无需适配的场景可用 px")]),t._v(" "),a("li",[t._v("需要适配各种移动设备下，使用 rem 最佳")])]),t._v(" "),a("h3",{attrs:{id:"实现两栏布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现两栏布局"}},[t._v("#")]),t._v(" 实现两栏布局")]),t._v(" "),a("h3",{attrs:{id:"实现三栏布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现三栏布局"}},[t._v("#")]),t._v(" 实现三栏布局")]),t._v(" "),a("ul",[a("li",[t._v("圣杯布局")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"实现等高布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现等高布局"}},[t._v("#")]),t._v(" 实现等高布局")]),t._v(" "),a("h3",{attrs:{id:"实现垂直居中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现垂直居中"}},[t._v("#")]),t._v(" 实现垂直居中")]),t._v(" "),a("h3",{attrs:{id:"如何实现移动端布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现移动端布局"}},[t._v("#")]),t._v(" 如何实现移动端布局")]),t._v(" "),a("h3",{attrs:{id:"讲一下-flex-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#讲一下-flex-布局"}},[t._v("#")]),t._v(" 讲一下 flex 布局")]),t._v(" "),a("p",[t._v("flex 布局的出现能够很好的替代浮动布局。它主要有两个部分，容器和项目，容器是包裹项目的，通过将容器的 display 设为 flex，就形成了 flex 布局。容器上有主轴和与主轴垂直的交叉轴，可以通过设置项目上的 flex-direction 来设置主轴和交叉轴的方向，通过 flex-wrap 设置主轴上项目放不下时是否换行，通过 justify-content 和 align-items 控制项目在主轴和交叉轴上的排列方式。项目上，可以设置自身的属性，比如可以设置 flex-grow 和 felx-shink 来控制主轴上空间不足时项目的缩放。还可以通过 order 开控制项目的排列顺序。")]),t._v(" "),a("p",[t._v("flex 是 CSS3 新增的布局，在不存在兼容性问题时，使用 flex 布局更方便高效。")]),t._v(" "),a("h2",{attrs:{id:"浮动与定位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮动与定位"}},[t._v("#")]),t._v(" 浮动与定位")]),t._v(" "),a("h3",{attrs:{id:"为什么要清除浮动-有哪些方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要清除浮动-有哪些方式"}},[t._v("#")]),t._v(" 为什么要清除浮动，有哪些方式")]),t._v(" "),a("p",[t._v("浮动是通过将设置 float 来实现的，浮动元素会脱离原本的文档流，而父元素由子元素撑起来的高度会因为脱离而失去，呈现高度塌陷。")]),t._v(" "),a("p",[t._v("可以通过解决浮动的方式有：")]),t._v(" "),a("ul",[a("li",[t._v("给父元素增加高度")]),t._v(" "),a("li",[t._v("通过伪元素加 clear:both 清除浮动")]),t._v(" "),a("li",[t._v("将父元素设置为 BFC，比如父元素添加 overflow: hidden")]),t._v(" "),a("li",[t._v("在老浏览器 IE 上还需要设置 zoom: 1，触发 layout")])]),t._v(" "),a("h3",{attrs:{id:"清除浮动的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动的原理"}},[t._v("#")]),t._v(" 清除浮动的原理")]),t._v(" "),a("p",[t._v("通过 clear 可以实现清除浮动，但 clear 自身并不能清除浮动，浮动还是在的，")]),t._v(" "),a("h3",{attrs:{id:"有使用过哪些定位-它们的定位原点在哪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有使用过哪些定位-它们的定位原点在哪"}},[t._v("#")]),t._v(" 有使用过哪些定位，它们的定位原点在哪")]),t._v(" "),a("p",[t._v("常用的有绝对定位、相对定位和固定定位：")]),t._v(" "),a("ul",[a("li",[t._v("绝对定位的 position 为 absolute，定位原点在第一个父元素的 position 不为 static 的祖先元素的 padding box 来定位")]),t._v(" "),a("li",[t._v("相对定位的 position 为 relative，定位原点是自身所在位置定位")]),t._v(" "),a("li",[t._v("固定定位的 position 为 fixed，定位原点是浏览器窗口")])]),t._v(" "),a("p",[t._v("还有一种少见的粘性定位，它的 position 为 sticky，在屏幕超过阈值前，呈现相对定位，超过阈值后是固定定位")]),t._v(" "),a("h2",{attrs:{id:"场景应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#场景应用"}},[t._v("#")]),t._v(" 场景应用")]),t._v(" "),a("h3",{attrs:{id:"li-与-li-之间的空白是什么-怎么清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#li-与-li-之间的空白是什么-怎么清除"}},[t._v("#")]),t._v(" li 与 li 之间的空白是什么，怎么清除")]),t._v(" "),a("p",[t._v("这个空白时幽灵空白节点，浏览器会把像 li 这样的内联元素间的空白字符渲染成一个空格，并且这个空格无法被选取。")]),t._v(" "),a("p",[t._v("解决方法有：")]),t._v(" "),a("ul",[a("li",[t._v("li 写在一行，但是不美观")]),t._v(" "),a("li",[t._v("设置左浮动，缺点是有些容器不能设置浮动，比如 swiper")]),t._v(" "),a("li",[t._v("设置又外边距，缺点是最右侧多出外边距")]),t._v(" "),a("li",[t._v("设置 ul 的 font-size 为 0，然后将 li 的字体重新设置。缺点是 safari 无效")]),t._v(" "),a("li",[t._v("设置 ul 的空格间距 letter-spacing：-8px，然后设置 li 的 letter-spacing 为 normal")])]),t._v(" "),a("h3",{attrs:{id:"margin-重叠怎么解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#margin-重叠怎么解决"}},[t._v("#")]),t._v(" margin 重叠怎么解决")]),t._v(" "),a("p",[t._v("margin 重叠有以下情况：")]),t._v(" "),a("ul",[a("li",[t._v("相邻兄弟的 margin-bottom 与 margin-top 重叠，将其中一个设为 BFC")]),t._v(" "),a("li",[t._v("父元素和子元素的 margin-top 重叠，可以设置父元素的 border-top、padding-top，也可将父元素设为 BFC")]),t._v(" "),a("li",[t._v("高度为 auto 的父元素的 margin-bottom 与子元素的 margin-bottom 重叠，可设置父元素的高度，或者将父元素设置 BFC")]),t._v(" "),a("li",[t._v("没有内容的元素 margin-top 和 margin-bottom 重叠，可设置元素的 border、padding 来解决")])]),t._v(" "),a("h3",{attrs:{id:"元素隐藏有哪些方式-有什么不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元素隐藏有哪些方式-有什么不同"}},[t._v("#")]),t._v(" 元素隐藏有哪些方式，有什么不同")]),t._v(" "),a("ul",[a("li",[t._v("position，相对定位占空间，绝对定位不占据空间，不支持绑定监听事件")]),t._v(" "),a("li",[t._v("overflow：hidden，占据空间，不支持绑定监听事件")]),t._v(" "),a("li",[t._v("opacity: 0，占据空间，不支持监听事件")]),t._v(" "),a("li",[t._v("visibility: hidden，占据空间，不支持绑定事件")]),t._v(" "),a("li",[t._v("display: none，不占据空间，不支持绑定事件")]),t._v(" "),a("li",[t._v("transform(scale(0, 0))，占据空间，不支持绑定事件")]),t._v(" "),a("li",[t._v("z-index: 负值：占据空间，不支持绑定事件")]),t._v(" "),a("li",[t._v("clip/clip-path：裁剪方法实现，元素仍占据位置，不会绑定监听事件")])]),t._v(" "),a("h3",{attrs:{id:"怎么让-chrome-实现-12px-以下字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么让-chrome-实现-12px-以下字体"}},[t._v("#")]),t._v(" 怎么让 chrome 实现 12px 以下字体")]),t._v(" "),a("p",[t._v("chrome 默认是无法显示 12px 以下字体的")]),t._v(" "),a("ul",[a("li",[t._v("通常方法是设置 -webkit-text-size-adjust: none，但新的版本无法使用")]),t._v(" "),a("li",[t._v("这个时候可以使用 -webkit-transform: (scale(0.5))，收缩整个元素打下，如果是内联元素，需要将内联元素转成块元素")]),t._v(" "),a("li",[t._v("最粗暴的方式是使用图片，无需考虑兼容和美观")])]),t._v(" "),a("h3",{attrs:{id:"如何解决移动端的-1px-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决移动端的-1px-问题"}},[t._v("#")]),t._v(" 如何解决移动端的 1px 问题")]),t._v(" "),a("h3",{attrs:{id:"实现三角形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现三角形"}},[t._v("#")]),t._v(" 实现三角形")]),t._v(" "),a("p",[t._v("利用边框均分的原理可以实现，将元素的宽高设为 0，然后设置一端有颜色，其他端颜色透明")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".triangle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red transparent transparent transparent\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h3",{attrs:{id:"实现宽高适应的正方形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现宽高适应的正方形"}},[t._v("#")]),t._v(" 实现宽高适应的正方形")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cyan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("利用 vw"),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10vw\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[t._v("利用元素 margin、padding 百分比")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("利用子元素 margi-top 值")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".square::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"画出一条-0-5px-的线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#画出一条-0-5px-的线"}},[t._v("#")]),t._v(" 画出一条 0.5px 的线")]),t._v(" "),a("ul",[a("li",[t._v("使用 transform: scale() 来缩小1px的线")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".line")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("使用 meta 设置 viewport")])]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=0.5, minimum-scale=0.6, maximum-scale=0.5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);