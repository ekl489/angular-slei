module.exports = {
  title: 'Documentation | angular-yousponsor',
  description: 'Just playing around',
  base: '/admin/docs/',

  // Theme
  themeConfig: {
    displayAllHeaders: true, // Default: false
    sidebar: [{
        title: 'Introduction',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Server',
        collapsable: false,
        children: [
          '/Server/'
        ]
      },
      {
        title: 'Client',
        collapsable: false,
        children: [
          '/Client/'
        ]
      },
    ]
  }
}