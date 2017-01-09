const title = 'Gradients';
const description = 'Gradients: random gradients, copy the css, save as an ' +
  'image... profit.';


export const helmetConfig = {
  title: title,
  meta: [
    {name: 'description'}
  ],
  htmlAttributes: {lang: 'en', amp: undefined}, // amp takes no value
  titleTemplate: `${title} - %s`,
  defaultTitle: title,
  titleAttributes: {itemprop: 'name', lang: 'en'},
  base: {target: '_blank', href: 'http://mysite.com/'},
  meta: [
      {name: 'description', content: `${title} ${description}`},
      {property: 'og:type', content: 'article'}
  ],
  link: [
      {rel: 'canonical', href: 'http://mysite.com/example'},
      {rel: 'apple-touch-icon', href: 'http://mysite.com/img/apple-touch-icon-57x57.png'},
      {rel: 'apple-touch-icon', sizes: '72x72', href: 'http://mysite.com/img/apple-touch-icon-72x72.png'}
  ],
  script: [
      {src: 'http://include.com/pathtojs.js', type: 'text/javascript'},
      {type: 'application/ld+json', innerHTML: `{ '@context': 'http://schema.org' }`}
  ],
  noscript: [
      {innerHTML: `<link rel: 'stylesheet' type: 'text/css' href: 'foo.css' />`}
  ]
};
