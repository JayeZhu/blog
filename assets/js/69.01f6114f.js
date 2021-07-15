(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{493:function(e,t,s){"use strict";s.r(t);var a=s(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),s("p",[e._v("vue 的核心思想是数据驱动，它通过 MVVM 模型实现数据驱动")]),e._v(" "),s("h2",{attrs:{id:"什么是数据驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据驱动"}},[e._v("#")]),e._v(" 什么是数据驱动")]),e._v(" "),s("blockquote",[s("p",[e._v("数据驱动是指视图是由数据驱动生成的，我们对视图的修改，不会直接操作 DOM，而是通过修改数据。")])]),e._v(" "),s("p",[e._v("以往开发中，如 jQuery 都会直接操作 DOM，不仅代码繁琐，还会因为频繁操作 DOM 而带来性能问题，而使用数据驱动只关心数据的修改，而不会直接触碰 DOM，将 DOM 变成了数据的映射，所有逻辑都是对数据的修改，非常利于维护。")]),e._v(" "),s("h2",{attrs:{id:"vue-的数据驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-的数据驱动"}},[e._v("#")]),e._v(" vue 的数据驱动")]),e._v(" "),s("p",[e._v("前面源码中认识到 vue 是一个函数，通过 new Vue 创建实例")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" vm "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("这里的 vm 是 MVVM 中的 ViewModel 的所谓，虽然没有完全遵循 MVVM 模型，也做到了数据驱动。")]),e._v(" "),s("h2",{attrs:{id:"mvvm-与-数据驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm-与-数据驱动"}},[e._v("#")]),e._v(" MVVM 与 数据驱动")]),e._v(" "),s("p",[e._v("MVVM 分为 Model、View、ViewModel：")]),e._v(" "),s("ul",[s("li",[e._v("Model代表数据模型，数据和业务逻辑都在Model层中定义；")]),e._v(" "),s("li",[e._v("View代表UI视图，负责数据的展示；")]),e._v(" "),s("li",[e._v("ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；")])]),e._v(" "),s("p",[e._v("Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。")]),e._v(" "),s("p",[e._v("这种模式实现了 Model和View的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作DOM，达到数据驱动的效果。")]),e._v(" "),s("h2",{attrs:{id:"mvvm、mvc和-mvp-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvvm、mvc和-mvp-的区别"}},[e._v("#")]),e._v(" MVVM、MVC和 MVP 的区别")]),e._v(" "),s("h3",{attrs:{id:"mvc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),s("p",[e._v("MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中")]),e._v(" "),s("ul",[s("li",[e._v("View 负责页面的显示逻辑，")]),e._v(" "),s("li",[e._v("Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。")]),e._v(" "),s("li",[e._v("Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。")])]),e._v(" "),s("h3",{attrs:{id:"mvp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvp"}},[e._v("#")]),e._v(" MVP")]),e._v(" "),s("p",[e._v("MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。")]),e._v(" "),s("h3",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[e._v("#")]),e._v(" 区别")]),e._v(" "),s("p",[e._v("MVC 的缺点在于视图与控制器过于紧密连接以及对模型数据的低效率访问，MVP 是 MVC 的改良模式，解决了 MVC 的部分缺点，但 MVP 的视图和 Presenter 的交互也过于频繁，一旦视图更新，Presenter 就需要变更，而 MVVM 将视图和模型分离，视图可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，实现了低耦合。")])])}),[],!1,null,null,null);t.default=r.exports}}]);