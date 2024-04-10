import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maomao docs",
  head: [['link', { rel: 'icon', href: '/vibeIcon.png' }]],
  description: "maomao documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collections', link: '/markdown-examples' },
      { text: 'DRiP', link: 'https://drip.haus/profile/supermalina' },
      { text: 'MagicEden', link: 'https://magiceden.io/' },
    ],

    sidebar: [
      {
        text: 'Information',
        items: [
          { text: 'About', link: '/about-maomao' },
          { text: 'Founders Collection', link: '/founders-collection' },
          { text: 'Future of maomao', link: '/future-of-maomao' },
          { text: 'Screenshots', link: '/screenshots' },
        ]
      },
      {
        text: 'Release Phases',
        items: [
          { text: 'Phase One', link: '/phase-one' },
          { text: 'Phase Two', link: '/phase-two' },
        ]
      },
      {
        text: 'Gameplay',
        items: [
          { text: 'Augmentation', link: '/augmentation' },
          { text: 'Transmutation', link: '/transmutation' },
          { text: 'Production', link: '/production' },
          { text: 'Merchant', link: '/merchant' },
        ]
      },
      {
        text: 'Building',
        items: [
          { text: 'Apartments', link: '/apartments' },
          { text: 'Decorations', link: '/decorations' },
          { text: 'Gemstones Productions', link: '/gemstones-productions' },
          { text: 'Goods Productions', link: '/goods-productions' },
          { text: 'Idle Productions', link: '/idle-productions' },
          { text: 'Materials Productions', link: '/materials-productions' },
        ]
      },
      {
        text: 'Farming',
        items: [
          { text: 'Crops', link: '/crops' },
        ]
      },
      {
        text: 'Gameplay',
        items: [
          { text: 'Augmentation', link: '/augmentation' },
          { text: 'Transmutation', link: '/transmutation' },
          { text: 'Production', link: '/production' },
          { text: 'Merchant', link: '/merchant' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'discord', link: 'https://discord.gg/pZ2jYXU2Us' },
      { icon: 'twitter', link: 'https://twitter.com/supermalina_' },
    ]
  }
})
