(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{489:function(v,t,e){"use strict";e.r(t);var a=e(15),_=Object(a.a)({},(function(){var v=this,t=v.$createElement,e=v._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"vue-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-概念"}},[v._v("#")]),v._v(" vue 概念")]),v._v(" "),e("p",[v._v("vue 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。")]),v._v(" "),e("p",[v._v("Vue的目标就是通过尽可能简单的api实现响应式的数据绑定和组合的视图组件。")]),v._v(" "),e("h2",{attrs:{id:"渐进式的框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渐进式的框架"}},[v._v("#")]),v._v(" 渐进式的框架")]),v._v(" "),e("p",[v._v("渐进式代表的含义是：没有多做职责以外的事情，主张较少，可以根据不同的需求选择不同的层级；\nvue.js只提供了vue-cli生态中最核心的组件系统和双向的数据绑定。像vuex、vue-router都属于围绕vue.js开发的库。")]),v._v(" "),e("h2",{attrs:{id:"视图层"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#视图层"}},[v._v("#")]),v._v(" 视图层")]),v._v(" "),e("p",[v._v("其实把页面抽象出来之后，我们会发现html里面的dom其实就是视图，一个网页其实就是视图的组合和嵌套，形成了最基本的视图结构，再通过css的修饰，然后再到JavaScript来的交互部分，通过接受用户的交互请求与，并且通过事件机制来响应用户的交互操作，并且在事件处理函数中进行各种数据的修改。\n我们把html中的dom就可以与其他的部分独立开来划分出一个层次，这个层次就叫做视图层。\n而我们的vue的核心库，就是只关注视图层。")]),v._v(" "),e("h2",{attrs:{id:"单页应用程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单页应用程序"}},[v._v("#")]),v._v(" 单页应用程序")]),v._v(" "),e("p",[v._v("SPA（single page web application）：单页应用程序是加载单个Html页面并在用户与应用程序交互时动态更新该页面的web应用程序。顾名思义，单页应用一般指的就是一个页面就是一个应用，当然也可以是一个子应用。单页应用程序中一般交互处理非常多，且页面当中的内容需要根据用户的操作进行动态的变化。")]),v._v(" "),e("h3",{attrs:{id:"单页应用程序优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单页应用程序优点"}},[v._v("#")]),v._v(" 单页应用程序优点")]),v._v(" "),e("ul",[e("li",[v._v("提供了更加吸引人的用户体验，具有桌面应用的即时性，网站的可移植性和可可访问性。")]),v._v(" "),e("li",[v._v("单页应用的内容改变不需要重新加载整个页面，web更具相应")]),v._v(" "),e("li",[v._v("单页应用没有页面之间的切换，就不会出现“白屏”现象，也不会出现假死并且有“闪烁”的现象")]),v._v(" "),e("li",[v._v("单页应用相对服务器来说压力较小，服务器只需要出数据就可以，不用管展示逻辑和页面的合成，吞吐能力会提高几倍")]),v._v(" "),e("li",[v._v("良好的前后端分离，后端不再负责模板渲染，输出页面工作，后端API通用化")]),v._v(" "),e("li",[v._v("完全的前端组件化开发，不再以页面为单位，更多地采用组件化的思想，代码解构和组织方式更加地规范化，便于修改和调整")])]),v._v(" "),e("h3",{attrs:{id:"单页应用程序缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单页应用程序缺点"}},[v._v("#")]),v._v(" 单页应用程序缺点")]),v._v(" "),e("ul",[e("li",[v._v("首次加载耗时比较多")]),v._v(" "),e("li",[v._v("SEO问题，不利于SEO优化，单页页面，数据在前端渲染，就意味着没有SEO")]),v._v(" "),e("li",[v._v("容易造成css命名冲突")]),v._v(" "),e("li",[v._v("页面的导航不可用，如果一定要导航需要自行实现前进，后退。（由于单页面不能用浏览器的前进后退功能，所以需要自己建立起堆栈管理）")])]),v._v(" "),e("h2",{attrs:{id:"响应式的数据绑定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式的数据绑定"}},[v._v("#")]),v._v(" 响应式的数据绑定")]),v._v(" "),e("p",[v._v("vue会自动响应数据的变化情况，并且根据用户在代码中预先写好的绑定关系，对所有绑定在一起的数据和视图内容进行修改，使用v-model属性实现双向的数据绑定。所以，vue.js也被人称为声明式渲染的模版引擎。\nVue.js数据观测原理在技术实现上，利用的是ES5Object.defineProperty和存储器属性：getter和setter（所以只兼容IE9及以上），可称为基于依赖收集的观测机制。核心是VM,即ViewModel，保证数据和视图的一致性。")]),v._v(" "),e("h2",{attrs:{id:"组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[v._v("#")]),v._v(" 组件")]),v._v(" "),e("p",[v._v("Vue.js通过组件，把一个单页应用中的各种模块拆分到一个一个单独的组件（component）中，我们只要先在父级应用中写好各种组件标签（占坑），并且在组件标签中写好要传入组件的参数（就像给函数传入参数一样，这个参数叫做组件的属性），然后再分别写好各种组件的实现（填坑），然后整个应用就算做完了。")]),v._v(" "),e("h2",{attrs:{id:"vue-的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的优点"}},[v._v("#")]),v._v(" vue 的优点")]),v._v(" "),e("ul",[e("li",[v._v("轻量级的框架，只关注视图层，是一个构建数据的视图集合，大小只有几十KB")]),v._v(" "),e("li",[v._v("简单易学，国人开发，中文文档，不存在语言障碍，便于理解和学习")]),v._v(" "),e("li",[v._v("双向数据绑定，在数据操作中较为简单")]),v._v(" "),e("li",[v._v("组件化，用可复用,解耦的组件来构建页面")]),v._v(" "),e("li",[v._v("数据驱动：自动计算属性和追踪依赖的模板表达式")]),v._v(" "),e("li",[v._v("虚拟DOM：DOM操作是十分耗费性能的，不再使用原生的dom操作节点，极大地解放了dom操作，但具体操作还是dom，只不过换了一种方式")])]),v._v(" "),e("h2",{attrs:{id:"vue-的缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-的缺点"}},[v._v("#")]),v._v(" vue 的缺点")]),v._v(" "),e("ul",[e("li",[v._v("兼容性差：不支持 IE8")])])])}),[],!1,null,null,null);t.default=_.exports}}]);