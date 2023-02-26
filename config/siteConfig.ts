const siteConfig = {
  title: 'Михаил Журавлёв',
  navigationLinks: [
    { title: 'Главная', path: '/' },
    { title: 'Последние', path: '/latest' },
    { title: 'Статьи', path: '/posts' },
  ],
  footerLinks: [
    { name: 'Философия', path: '/posts/philosophy' },
    { name: 'Rust', path: '/posts/rust' },
    { name: 'Ruby', path: '/posts/ruby' },
    { name: 'JavaScript', path: '/posts/javascript' },
    { name: 'Next', path: '/posts/nextjs' },
    { name: 'React', path: '/posts/react' },
    { name: 'Религия', path: '/posts/religion' },
    { name: 'Законы', path: '/posts/laws' },
  ],
  recentlyPub: 'Недавно опубликовано',
  popularCat: 'Популярные категории',
  popularArt: 'Популярные статьи',
};

export default siteConfig;
