import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "maomao docs",
  head: [
    [
      'link',
       { rel: 'icon', href: '/maomao-docs/vibeIcon.png'}
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap', rel: 'stylesheet' }
    ]
  ],
  description: "maomao documentation",
  base: "/maomao-docs/",
  themeConfig: {
    logo: './vibeIcon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collections', link: '/collections' },
      { text: 'DRiP', link: 'https://drip.haus/profile/supermalina' },
      { text: 'MagicEden', link: 'https://magiceden.io/' },
      { text: 'Twitch', link: 'https://www.twitch.tv/supermalina_' },
      { text: 'Telegram', link: 'https://t.me/maomaoAnnouncer' },
    ],

    sidebar: [
      {
        text: 'Information',
        items: [
          { text: 'Read Me!', link: '/about-maomao' },
          { text: 'Originals Collection', link: '/originals-collection' },
          { text: 'The Future', link: '/future-of-maomao' },
          { text: 'Game Sneak Peek', link: '/screenshots' },
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
      {
        text: 'USDC Market',
        items: [
          { text: 'Currency', link: '/usdc-market/currency' },
          { text: 'Loot Boxes', link: '/usdc-market/loot-boxes' },
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
