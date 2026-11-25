export const SITE = {
  name: 'BuyAhref',
  url: 'https://buyahref.com',
  email: 'buyahref@gmail.com',
  phone: '+91 88490-09707',
  phoneHref: 'tel:+918849009707',
  signupUrl: 'https://toolsmandi.com/signup',
  loginUrl: 'https://toolsmandi.com/signup',
  signupPage: '/secure/signup',
  defaultTitle: 'Ahrefs Group Buy: Unlimited Ahrefs At 5$ » Buy Ahrefs',
  defaultDescription:
    'Ahrefs is undoubtedly powerful, but its full potential often comes at a steep price. This is where the Ahrefs Group Buy model comes into play, offering affordable unlimited access.',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Tools', href: '/tools' },
  { label: 'Login', href: '/secure/login' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_LINKS = [
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  { label: 'Refund', href: '/refund' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
] as const;

/** Master Plan tool stack (ToolsMandi Master Plan). */
export const PLAN_TOOLS = [
  'Ahrefs',
  'Semrush',
  'Envato Elements',
  'ChatGPT',
  'Canva',
  'Jasper',
  'Helium 10 Learning',
  'UberSuggest',
  'WordHero',
  'Grammarly',
  'Place it',
  'WordTune',
  'Flaticon',
  'Quillbot',
  'Leonardo.ai',
  'Jungle Scout',
  'Epidemic Sound',
  'Coursera',
  'Helium 10 Platinum',
  'Niche Scraper',
  'Keepa',
  'SellerAmp',
  'CopySpace.ai',
  'scite_',
  'AnswerThePublic',
  'Closers Copy',
  'CopyWritely',
  'Piktochart',
  'Creattie',
  'glorify',
  'Prezi',
  'Minvo',
  'seobility',
  'SeoSiteCheckup',
  'Woorank',
  'Storybase',
  'SEO Tester Online',
] as const;

/** ToolsMandi checkout coupon — 20% off. */
export const COUPON = {
  code: 'BUYAHREF',
  discountLabel: '20% off',
  blurb: 'Use code BUYAHREF at ToolsMandi checkout for 20% off your Master Plan membership.',
} as const;

export const PLANS = [
  {
    name: 'Monthly',
    price: '$29.99',
    period: '/ month',
    highlight: false,
  },
  {
    name: '6 Month',
    price: '$150',
    period: '/ 6 months',
    highlight: true,
  },
  {
    name: '1 Year',
    price: '$220',
    period: '/ year',
    highlight: false,
  },
] as const;

export const MEMBERSHIP_PLANS = [
  {
    group: 'Ahrefs Only',
    items: [
      { name: 'Ahrefs', price: '₹1,200', period: 'for 30 days' },
      { name: 'Ahrefs', price: '$17', period: 'for each 30 days' },
    ],
  },
  {
    group: 'Master Plan',
    items: [
      {
        name: 'Master Plan',
        price: '₹1,999',
        period: 'for 30 days',
        note: 'Ahrefs + Semrush + Envato + 35 more tools · coupon BUYAHREF = 20% off',
      },
      {
        name: 'Master Plan',
        price: '$29.99',
        period: 'for each 30 days',
        note: 'Ahrefs + Semrush + Envato + 35 more tools · coupon BUYAHREF = 20% off',
      },
      { name: 'Master Plan', price: '₹9,999', period: 'for 6 months', note: 'Best value · use BUYAHREF for 20% off' },
      { name: 'Master Plan', price: '$150', period: 'for each 6 months', note: 'Best value · use BUYAHREF for 20% off' },
      { name: 'Master Plan', price: '₹14,999', period: 'for one year', note: 'Full year · use BUYAHREF for 20% off' },
      { name: 'Master Plan', price: '$220', period: 'for each year', note: 'Full year · use BUYAHREF for 20% off' },
    ],
  },
  {
    group: 'Lite Plan',
    items: [
      { name: 'Lite Plan', price: '₹1,399', period: 'for 30 days', note: 'Semrush + creative tools (no Ahrefs)' },
      { name: 'Lite Plan', price: '$25', period: 'for each 30 days', note: 'Semrush + creative tools (no Ahrefs)' },
      { name: 'Lite Plan', price: '₹5,499', period: 'for 6 months' },
      { name: 'Lite Plan', price: '$99.99', period: 'for each 6 months' },
      { name: 'Lite Plan', price: '₹8,999', period: 'for one year' },
      { name: 'Lite Plan', price: '$149', period: 'for each year' },
    ],
  },
  {
    group: 'Trial & Single Tools',
    items: [
      { name: 'Ahrefs Trail Plan', price: '₹399', period: 'for one day' },
      { name: 'Ahrefs Trail Plan', price: '$5', period: 'for one day' },
      { name: 'Semrush Guru', price: '₹299', period: 'for 30 days' },
      { name: 'Semrush Guru', price: '$8', period: 'for each 30 days' },
      { name: 'ChatGPT', price: '₹499', period: 'for 30 days' },
      { name: 'ChatGPT', price: '$9', period: 'for each 30 days' },
      { name: 'Envato Elements', price: '₹299', period: 'for 30 days' },
      { name: 'Envato Elements', price: '$7', period: 'for each 30 days' },
      { name: 'Moz Pro', price: '₹299', period: 'for 30 days' },
      { name: 'Moz Pro', price: '$5', period: 'for each 30 days' },
    ],
  },
] as const;
