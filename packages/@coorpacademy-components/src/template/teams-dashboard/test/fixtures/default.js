import {defaultsDeep} from 'lodash/fp';
// import Card from '../../../../molecule/card/test/fixtures/default';
import ManyCardsList from '../../../../molecule/dashboard/cards-list/test/fixtures/many';

const manyCardsProps = ManyCardsList.props;

const cardProps = {
  image:
    'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
  adaptiv: false,
  certification: false,
  type: 'course',
  title: 'From Mass Market to One to One targeting Lorem ipsum',
  author: 'Coorpacademy',
  certifiedAuthor: true,
  // progress: 0.65,
  badge: 'new',
  // favorite: true,
  // addFavoriteToolTip: 'Add to my list',
  // removeFavoriteToolTip: 'Remove from my list',
  customer: {
    coorpOriginal: true,
    name: 'Decathlon creation'
  },
  onClick: () => console.log('click everywhere'),
  onFavoriteClick: () => console.log('click Favorite')
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

export default {
  props: {
    logo: {
      src: 'https://static.coorpacademy.com/content/up/raw/logo_coorp-1491561426926.svg',
      srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo_mobile-1491561428898.svg',
      href: '#'
    },
    platformLink: {
      submitValue: 'Go to your platform',
      href: '#',
      target: '_self',
      light: false,
      small: true,
      secondary: false
    },
    sections: [
      defaultsDeep(cardsProps, {
        type: 'cards'
      }),
      defaultsDeep(manyCardsProps, {
        type: 'cards'
      })
    ]
  }
};
