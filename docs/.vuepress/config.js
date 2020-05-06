module.exports = {
  themeConfig: {
    logo: '/assets/img/WA_icon.png',
    nav:[
      { text: 'Royal College', link: 'http://www.royalcollege.ca', target:'_blank', rel:'' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'English', link: '/language/english/' },
          { text: 'French', link: '/language/french/' }
        ]
      }
    ]
  }
}