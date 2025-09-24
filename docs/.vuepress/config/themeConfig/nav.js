// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/fe/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'HTML', link: '/fe/8db2b0/'},
      { text: 'CSS', link: '/fe/ecbb0f/'},
      { text: 'JavaScript', link: '/fe/d9fabb/'},
      { text: 'Vue', link: '/pages/443b6e/'},
      { text: '浏览器原理', link: '/pages/363c46/'},
      { text: '计算机网络', link: '/pages/fe0b18/'},
      { text: '前端工程化', link: '/pages/6f3a4a/'},
      { text: '前端设计模式', link: '/pages/8869ee/'},
      { text: '前端性能优化', link: '/pages/e71b27/'},
    ],
  },
  {
    text: '后端',
    link: '/be/',
    items: [
      { text: 'Node', link: '/pages/02a784/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '博客搭建', link: '/technology/228b1e/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '算法', link: '/algorithm/e78365/' },
      // { text: '学习', link: '/pages/f2a556/' },
      // { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/collections/beb6c0bd8a66cea6/',
    items: [
      { text: '网站', link: '/collections/4f748c/' },
      { text: '文章', link: '/collections/c1978c/' },
      { text: '应用', link: '/collections/0944a9/' },
    ],
  },
  {
    text: '归档',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '英文', link: 'https://en.jayezhu.dpdns.org/' },
]
