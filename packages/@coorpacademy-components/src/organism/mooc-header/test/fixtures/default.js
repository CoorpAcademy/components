import sliderFixtures from '../../../../molecule/slider/test/fixtures/default';

const slider = sliderFixtures.props;

export default {
  props: {
    logo: {
      src: 'https://www.coorpacademy.com/assets/img/logo.svg',
      href: '#'
    },
    themes: [
      {
        title: 'Digital',
        selected: true
      },
      {
        title: 'All',
        href: '#',
        selected: false
      },
      {
        title: 'Esprit du temps',
        href: '#',
        selected: false
      },
      {
        title: 'Gérer son épargne',
        href: '#',
        selected: false
      }
    ],
    pages: [
      {
        title: 'Explore',
        href: '#',
        selected: true
      },
      {
        title: 'Battles',
        href: '#',
        selected: false
      },
      {
        title: 'News',
        href: '#',
        selected: false
      },
      {
        title: 'Médias',
        href: '#',
        selected: false
      },
      {
        title: 'Discussions',
        href: '#',
        selected: false
      },
      {
        title: 'FAQ',
        href: '#',
        selected: false
      }
    ],
    settings: [
      {
        title: 'Language',
        type: 'select',
        options: {},
        onClick: () => true
      }
    ],
    slider
  }
};
