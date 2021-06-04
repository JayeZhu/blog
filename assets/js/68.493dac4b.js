(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{486:function(a,e,t){"use strict";t.r(e);var s=t(15),i=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("浏览器缓存分为"),t("strong",[a._v("强缓存")]),a._v("和"),t("strong",[a._v("协商缓存")])]),a._v(" "),t("h2",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),t("p",[a._v("强缓存是不需要发送 HTTP 请求的，在 HTTP1.0 和 HTTP 1.1 中体现方式不一样")]),a._v(" "),t("h3",{attrs:{id:"expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[a._v("#")]),a._v(" Expires")]),a._v(" "),t("p",[a._v("在 HTTP 1.0 中，使用 Expires 设置强缓存的具体过期时间")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Expires: Fri Jun 04 2021 15:37:32 GMT\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("意味着到了这个时间，强缓存就是失效，将发送 HTTP 请求到服务端。但是存在问题：浏览器时间可能与服务器时间不一致，导致缓存失败，因此在 HTTP 1.1 被摒弃了。")]),a._v(" "),t("h3",{attrs:{id:"cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[a._v("#")]),a._v(" Cache-Control")]),a._v(" "),t("p",[a._v("HTTP 1.1 使用 Cache-Control 来替代 Expires，它通过 max-age 设置过期延迟时长")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Cache-Control: max-age=3600\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这表示 1h 后过期。使用 Cache-Control 更合理，在于 Expires 一起存在时，优先级高于 Expires。")]),a._v(" "),t("h3",{attrs:{id:"expires-与-cache-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expires-与-cache-control"}},[a._v("#")]),a._v(" Expires 与 Cache-Control")]),a._v(" "),t("ul",[t("li",[a._v("版本：Expires 基于 HTTP/1.0；Cache-Control 基于 HTTP/1.1")]),a._v(" "),t("li",[a._v("方式：Expries 设定过期具体时间；Cache-Control 设定过期延长时间")]),a._v(" "),t("li",[a._v("严谨：Expires 设置过期时间可能因服务器与客户端时间不一样而产生误差，Cache-Control 不会")]),a._v(" "),t("li",[a._v("优先级：Cache-Control 优先于 Expires")])]),a._v(" "),t("h2",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),t("p",[a._v("协商缓存需要向服务器发送 HTTP 请求，缓存命中，服务器返回 304，否则返回请求结果。")]),a._v(" "),t("p",[a._v("协商缓存通过缓存标识（Tag）来识别是否采用缓存，分为两种：Last-Modified 和 ETag")]),a._v(" "),t("h3",{attrs:{id:"last-modified"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[a._v("#")]),a._v(" Last-Modified")]),a._v(" "),t("p",[a._v("Last-Modified 代表资源的最后修改时间，配合 If-Modified-Since 使用：")]),a._v(" "),t("ul",[t("li",[a._v("浏览器第一次向服务器请求资源")]),a._v(" "),t("li",[a._v("服务器在返回资源时，在响应头中添加 Last-Modified 字段，其值为该资源在服务器最后修改时间")]),a._v(" "),t("li",[a._v("浏览器接收资源后缓存资源以及 Last-Modified 字段")]),a._v(" "),t("li",[a._v("浏览器再次请求该资源时，检测到缓存有 Last-Modified，会在请求头附带 If-Modified-Since 字段，字段值为 Last-Modified 值")]),a._v(" "),t("li",[a._v("服务器再次接收到该资源请求，根据 If-Modified-Since 与该资源在服务器的最后修改时间做对比")]),a._v(" "),t("li",[a._v("对比相同则返回 304 和空响应体")]),a._v(" "),t("li",[a._v("对比不同则返回 200、最新资源以及新的 Last-Modified")])]),a._v(" "),t("h3",{attrs:{id:"etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[a._v("#")]),a._v(" ETag")]),a._v(" "),t("p",[a._v("ETag 与 Last-Modified 类似，不过他采用标识对比，配合 If-None-Match 使用")]),a._v(" "),t("ul",[t("li",[a._v("浏览器第一次向服务器请求资源")]),a._v(" "),t("li",[a._v("服务器返回该资源时，在响应头添加服务器生成的 ETag 字段")]),a._v(" "),t("li",[a._v("浏览器接收资源后缓存资源和 ETag")]),a._v(" "),t("li",[a._v("浏览器再次请求该资源时，检测到缓存有 ETag，将值放入请求头中的 If-None-Match 发给服务器")]),a._v(" "),t("li",[a._v("服务器再次接收到该资源请求，根据资源 ETag 和接收到的 If-None-Match 作对比")]),a._v(" "),t("li",[a._v("对比相同则返回 304 和空响应体")]),a._v(" "),t("li",[a._v("对比不同则返回 200、最新资源以及新的 ETag")])]),a._v(" "),t("h3",{attrs:{id:"last-modified-与-etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-与-etag"}},[a._v("#")]),a._v(" Last-Modified 与 ETag")]),a._v(" "),t("ul",[t("li",[a._v("准确度：ETag 准确度高于 Last-Mofidied\n"),t("ul",[t("li",[a._v("本地缓存文件打开未修改，会改变最后修改时间")]),a._v(" "),t("li",[a._v("文件在极短时间内修改多次，但显示未修改")])])]),a._v(" "),t("li",[a._v("性能：Last-Modified 优于 ETag\n"),t("ul",[t("li",[a._v("Last-Modified 只需存储传输时间")]),a._v(" "),t("li",[a._v("ETag 随文件修改，需要通过服务器通过算法计算 hash 值")])])]),a._v(" "),t("li",[a._v("优先度：ETag 优于 Last-Modified")])]),a._v(" "),t("h2",{attrs:{id:"缓存位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[a._v("#")]),a._v(" 缓存位置")]),a._v(" "),t("p",[a._v("缓存因优先级分为四种")]),a._v(" "),t("h3",{attrs:{id:"service-worker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[a._v("#")]),a._v(" Service Worker")]),a._v(" "),t("h3",{attrs:{id:"memory-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache"}},[a._v("#")]),a._v(" Memory Cache")]),a._v(" "),t("h3",{attrs:{id:"disk-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disk-cache"}},[a._v("#")]),a._v(" Disk Cache")]),a._v(" "),t("h3",{attrs:{id:"push-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-cache"}},[a._v("#")]),a._v(" Push Cache")])])}),[],!1,null,null,null);e.default=i.exports}}]);