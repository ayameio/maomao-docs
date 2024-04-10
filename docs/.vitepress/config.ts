import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maomao docs",
  head: [['link', { rel: 'icon', href: '/vibeIcon.png' }]],
  description: "maomao documentation",
  base: "/maomao-docs/",
  themeConfig: {
    logo: './vibeIcon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collections', link: '/collections' },
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
          { text: 'Realm Vibe', link: '/realm-vibe' },
        ]
      },
      {
        text: 'Building',
        items: [
          { text: 'Apartments', link: '/building/apartments' },
          { text: 'Decorations', link: '/building/decorations' },
          { text: 'Gemstones Productions', link: '/building/gemstones-productions' },
          { text: 'Goods Productions', link: '/building/goods-productions' },
          { text: 'Idle Productions', link: '/building/idle-productions' },
          { text: 'Materials Productions', link: '/building/materials-productions' },
        ]
      },
      {
        text: 'Farming',
        items: [
          { text: 'Crops', link: '/farming/crops' },
          { text: 'Soils', link: '/farming/soils' },
        ]
      },
      {
        text: 'Items',
        items: [
          { text: 'Goods', link: '/items/goods' },
          { text: 'Materials', link: '/items/materials' },
          { text: 'Gemstones', link: '/items/gemstones' },
          { text: 'Consumables', link: '/items/consumables' },
          { text: 'Keys', link: '/items/keys' },
          { text: 'Loot Boxes', link: '/items/loot-boxes' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ayameio' },
      { icon: 'discord', link: 'https://discord.gg/pZ2jYXU2Us' },
      { icon: 'twitter', link: 'https://twitter.com/supermalina_' },
    ]
  }
})
