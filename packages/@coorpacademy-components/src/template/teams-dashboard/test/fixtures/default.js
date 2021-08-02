import {defaultsDeep} from 'lodash/fp';

const cardProps = {
  image:
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
  adaptiv: false,
  certification: false,
  type: 'course',
  title: 'From Mass Market to One to One targeting Lorem ipsum',
  author: 'Coorpacademy',
  certifiedAuthor: true,
  badge: 'new',
  customer: {
    coorpOriginal: true,
    name: 'Decathlon creation'
  },
  onClick: () => console.log('click everywhere')
};

const manyCardsProps = {
  title: 'Most Recent',
  showMore: 'See all',
  cards: [
    defaultsDeep(cardProps, {title: 'First item'}),
    defaultsDeep(cardProps, {title: 'Second item'}),
    defaultsDeep(cardProps, {title: 'Third item'}),
    defaultsDeep(cardProps, {title: 'Fourth item'}),
    defaultsDeep(cardProps, {title: 'Fifth item'}),
    defaultsDeep(cardProps, {title: 'Sixth item'}),
    defaultsDeep(cardProps, {title: 'Seventh item'}),
    defaultsDeep(cardProps, {title: 'Eight item'}),
    defaultsDeep(cardProps, {title: 'Ninth item'}),
    defaultsDeep(cardProps, {title: 'Tenth item'}),
    defaultsDeep(cardProps, {type: 'chapter'})
  ],
  onScroll: (skip, limit) => {
    console.log(skip, limit);
  },
  onShowMore: () => {
    console.log('show More');
  }
};

const cardsProps = {
  title: 'Most popular',
  cards: [
    cardProps,
    cardProps,
    cardProps,
    {},
    {},
    {},
    cardProps,
    cardProps,
    cardProps,
    {},
    cardProps,
    cardProps,
    cardProps
  ],
  onScroll: (skip, limit) => {
    console.log(skip, limit);
  }
};

export const logo = {
  src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
  srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491561428898.svg',
  href: '#'
};

export const platformLinks = [
  {
    submitValue: 'Go to your platform',
    href: 'https://onboarding.coorpacademy.com/dashboard',
    target: '_blank',
    small: false
  },
  {
    submitValue: 'Log out',
    href: '#',
    target: '_self',
    small: false,
    logout: true
  }
];

export const headerProps = {
  logo,
  platformLinks
};

export const sections = [
  defaultsDeep(cardsProps, {
    type: 'cards'
  }),
  defaultsDeep(manyCardsProps, {
    type: 'cards'
  })
];

export default {
  props: {
    ...headerProps,
    sections,
    isLoading: false
  }
};
