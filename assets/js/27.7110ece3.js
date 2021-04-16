(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{440:function(t,v,_){"use strict";_.r(v);var r=_(15),e=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("JS 变量没有指定数据类型，因此不经意间就会发生类型转换，当然也可以强行转换（也就是隐式转换和显式转换），\n用到的主要是 String()、Number()、Boolean() 等构造函数将数据类型进行转换")]),t._v(" "),_("h3",{attrs:{id:"转换为字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转换为字符串"}},[t._v("#")]),t._v(" 转换为字符串")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("被转类型")]),t._v(" "),_("th",[t._v("转换结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("number 或 bigint")]),t._v(" "),_("td",[t._v("number 的字符串形式")])]),t._v(" "),_("tr",[_("td",[t._v("null")]),t._v(" "),_("td",[t._v('"null"')])]),t._v(" "),_("tr",[_("td",[t._v("undefined")]),t._v(" "),_("td",[t._v('"undefined"')])]),t._v(" "),_("tr",[_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v('true->"true",false->"false"')])]),t._v(" "),_("tr",[_("td",[t._v("symbol")]),t._v(" "),_("td",[t._v("symbol 的字符串形式")])]),t._v(" "),_("tr",[_("td",[t._v("object")]),t._v(" "),_("td",[t._v("执行 object 的 toString() 方法")])])])]),t._v(" "),_("p",[t._v("其中 object 根据对象类型不同而返回不同结果：")]),t._v(" "),_("ul",[_("li",[t._v("如果有自定义 toString()，则执行并返回结果")]),t._v(" "),_("li",[t._v("Array 默认返回一个字符串，将数组扁平，每个元素被 String() 转换后用逗号连接")]),t._v(" "),_("li",[t._v("Function 默认返回当前函数源代码的字符串")]),t._v(" "),_("li",[t._v("RegExp 默认返回自身的字符串值")])]),t._v(" "),_("h3",{attrs:{id:"转换为数值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转换为数值"}},[t._v("#")]),t._v(" 转换为数值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("被转类型")]),t._v(" "),_("th",[t._v("转换结果")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("string")]),t._v(" "),_("td",[t._v('""->0，有非数字或数值字符->NaN，否则转为数字')])]),t._v(" "),_("tr",[_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true->1，false->0")])]),t._v(" "),_("tr",[_("td",[t._v("null")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("undefined")]),t._v(" "),_("td",[t._v("NaN")])]),t._v(" "),_("tr",[_("td",[t._v("bigint")]),t._v(" "),_("td",[t._v("去除n")])]),t._v(" "),_("tr",[_("td",[t._v("symbol")]),t._v(" "),_("td",[t._v("报错Uncaught TypeError: Cannot convert a Symbol value to a number")])]),t._v(" "),_("tr",[_("td",[t._v("object")]),t._v(" "),_("td",[t._v("执行 ToPrimitive，即先执行 valueOf()，如果返回基本类型就再转化，否则执行 toString()，如果返回基本类型就转化，否则报错")])])])]),t._v(" "),_("h3",{attrs:{id:"转换为布尔值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#转换为布尔值"}},[t._v("#")]),t._v(" 转换为布尔值")]),t._v(" "),_("p",[t._v("除了以下假值，其他都是真值：")]),t._v(" "),_("ul",[_("li",[t._v("0、-0、+0、NaN")]),t._v(" "),_("li",[t._v("0n、-0n、+0n")]),t._v(" "),_("li",[t._v('""')]),t._v(" "),_("li",[t._v("null")]),t._v(" "),_("li",[t._v("undefined")]),t._v(" "),_("li",[t._v("document.all")]),t._v(" "),_("li",[t._v("false")])])])}),[],!1,null,null,null);v.default=e.exports}}]);