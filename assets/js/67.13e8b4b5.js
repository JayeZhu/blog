(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{485:function(n,t,e){"use strict";e.r(t);var o=e(15),s=Object(o.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("ol",[t("li",[this._v("浏览器渲染基本步骤\n浏览器主要有以下步骤：\n• 浏览器通过HTTP协议向服务端请求页面数据\n• 将请求回来的HTML文件解析成DOM树\n• 将请求回来的CSS文件解析成CSSOM树\n• 将DOM树和CSSOM树结合在一起，生成渲染树（render tree）\n• 计算渲染树的布局，这实际上是回流的过程\n• 将布局渲染到屏幕上，这实际上是重绘的过程\n大致过程如图所示：\n这里主要说说后面解析的过程。")]),this._v(" "),t("li",[this._v("构建DOM树、CSSOM树\n（1）构建DOM树\n当打开一个网页时，浏览器都会去请求对应的 HTML 文件。虽然平时我们写代码时都会分为 JS、CSS、HTML 文件，也就是字符串，但是计算机硬件是不理解这些字符串的，所以在网络中传输的内容其实都是 0 和 1 这些字节数据。当浏览器接收到这些字节数据以后，它会将这些字节数据转换为字符串，也就是我们写的代码。\n当数据转换为字符串以后，浏览器会先将这些字符串通过词法分析转换为标记（token），这一过程在词法分析中叫做标记化（tokenization）。\n简单来说，标记还是字符串，是构成代码的最小单位。这一过程会将代码分拆成一块块，并给这些内容打上标记，便于理解这些最小单位的代码是什么意思。\n当结束标记化后，这些标记会紧接着转换为 Node，最后这些 Node 会根据不同 Node 之前的联系构建为一颗 DOM 树。\n以上就是浏览器从网络中接收到 HTML 文件然后一系列的转换过程。\n当然，在解析 HTML 文件的时候，浏览器还会遇到 CSS 和 JS 文件，这时候浏览器也会去下载并解析这些文件，接下来就看看浏览器如何解析 CSS 文件。\n注意：在解析过程中，如果遇到 "),t("script")])])])}),[],!1,null,null,null);t.default=s.exports}}]);