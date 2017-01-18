import disciplineCTA from '../../../../molecule/discipline-cta/test/fixtures/default';

const {start, buy, startLabel, buyLabel} = disciplineCTA.props;

export default {
  props: {
    type: 'discipline',
    start,
    buy,
    startLabel,
    buyLabel,
    author: {
      name: 'Eléphant',
      logo: {
        src: 'https://static-staging.coorpacademy.com/upload/up/partners/1472198693277logo_elephant.png',
        href: '/elephant'
      },
      socialLinks: [
        {
          type: 'facebook',
          link: 'http://www.facebook.com/pages/Elephant/146865738800649'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/7A8officiel'
        }
      ]
    }
  }
};
