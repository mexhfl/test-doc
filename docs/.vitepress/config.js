module.exports = {
  title: 'TEST DOC',
  description: 'Just playing around.',
  base:'/test-doc/',
  head: [
    ['meta', {name: 'referrer', content: 'no-referrer'}],
  ],
  themeConfig: {
    nav: [
      {text: 'aaa', link: '/a/', activeMatch: '/a/'},
      {text: 'bbb', link: '/b/', activeMatch: '/b/'},
      {text: 'test', link: '/test', activeMatch: '/test'},
    ],
    sidebar: {
      '/a/': [{
        text: 'aaa',
        collapsed: false,
        items: [
          {text: 'a1', link: '/a/a1'},
          {text: 'a2', link: '/a/a2'},
          {text: 'a3', link: '/a/a3'}
        ]
      }],
      
      '/b/': [{
        text: 'bbb',
        collapsed: false,
        items: [
          {text: 'b1', link: '/b/b1'},
          {text: 'b2', link: '/b/b2'},
          {text: 'b3', link: '/b/b3'}
        ],
      }]
    }
  }
}