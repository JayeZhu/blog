(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{483:function(t,e,v){"use strict";v.r(e);var _=v(15),i=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),v("p",[t._v("前端开发中可能遇到攻击，常见的有 XSS 攻击和 CSRF 攻击")]),t._v(" "),v("h2",{attrs:{id:"xss攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击"}},[t._v("#")]),t._v(" XSS攻击")]),t._v(" "),v("p",[t._v("XSS（Cross Site Scripting，区别于CSS，叫XSS） 攻击指的是跨站脚本攻击，它的原理是在浏览器中执行恶意脚本，从而拿到用户信息进行操作，一般包括：")]),t._v(" "),v("ul",[v("li",[t._v("窃取 Cookie")]),t._v(" "),v("li",[t._v("监听用户行为")]),t._v(" "),v("li",[t._v("修改 DOM 伪造登录表单")]),t._v(" "),v("li",[t._v("在页面生成浮窗广告")])]),t._v(" "),v("h3",{attrs:{id:"攻击类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#攻击类型"}},[t._v("#")]),t._v(" 攻击类型")]),t._v(" "),v("ul",[v("li",[t._v("存储型：将恶意代码存储在服务器，只要浏览器端发起请求，服务器将其拼接成 HTML 返回给浏览器，恶意代码执行")]),t._v(" "),v("li",[t._v("反射型：将恶意脚本作为网络请求的参数，讲过服务器反射给 HTML文档，执行解析后执行")]),t._v(" "),v("li",[t._v("文档型：修改页面 DOM 节点")])]),t._v(" "),v("h3",{attrs:{id:"防御"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防御"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),v("p",[t._v("三种攻击有个共同点：在浏览器中执行恶意代码。因此，要防御，必须避免这些脚本代码的执行。")]),t._v(" "),v("ul",[v("li",[t._v("将用户的输入进行转码或过滤")]),t._v(" "),v("li",[t._v("添加 CSP，CSP 指的是白名单，服务器能够通过白名单决定浏览器加载哪些资源，能够做到\n"),v("ul",[v("li",[t._v("限制其他域下的资源加载")]),t._v(" "),v("li",[t._v("禁止向其他域提交数据")]),t._v(" "),v("li",[t._v("提供上报机制，及时发现 XSS 攻击")])])]),t._v(" "),v("li",[t._v("利用 HttpOnly：设置 Cookie 的 HttpOnly后，JS 无法获取带 Cookie")])]),t._v(" "),v("h2",{attrs:{id:"csrf-攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击"}},[t._v("#")]),t._v(" CSRF 攻击")]),t._v(" "),v("p",[t._v("CSRF（Cross-site request forgery）攻击指的是跨站请求伪造，原理是诱导用户点击链接，打开黑客网站，然后黑客利用用户目前的登录状态发起跨站请求。它的本质是利用 cookie 会在同源请求中携带发送给服务器的特点，来冒充用户")]),t._v(" "),v("h3",{attrs:{id:"攻击类型-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#攻击类型-2"}},[t._v("#")]),t._v(" 攻击类型")]),t._v(" "),v("ul",[v("li",[t._v("GET 类型：")]),t._v(" "),v("li",[t._v("POST 类型：")]),t._v(" "),v("li",[t._v("链接类型：")])]),t._v(" "),v("h3",{attrs:{id:"防御-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#防御-2"}},[t._v("#")]),t._v(" 防御")]),t._v(" "),v("ul",[v("li",[t._v("同源检测：服务器根据 HTTP 请求投中 origin 或者 referer 信息来判断请求是否为允许访问的站点，从而过滤请求，当两者信息都不存在时，直接阻止请求。缺点是 referer 可能被仿造，并且会屏蔽搜索引擎的链接。")]),t._v(" "),v("li",[t._v("CSRF Token 验证：服务端随机生成返回给浏览器 Token，会被加入到每一次请求的参数中给服务器验证。这个办法解决了 cookie 单一验证时，可能被冒用的问题。但缺点是，所有请求添加验证较为繁琐，另外多台服务器添加 token 有需要额外构建分布式。")]),t._v(" "),v("li",[t._v("cookie 双重验证：服务器向请求域名注入一个 cookie，浏览器发出请求时，参数中附带 cookie 的内容，服务器将 cookie 中内容与参数验证。这种方式利用攻击者只能利用 cookie，不能访问获取 cookie 的特点，比 Token 方便。但缺点是 XSS 攻击下，这种方式会失效，并且子域名无法隔离。")]),t._v(" "),v("li",[t._v("设置 Cookie 的 SameSite 属性为 Strict 或 Lax：这种方式可以限制第三方 cookie，strict 会限制所有第三方 cookie，而 Lax 较为宽松，GET 请求时可以使用第三方 cookie。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);