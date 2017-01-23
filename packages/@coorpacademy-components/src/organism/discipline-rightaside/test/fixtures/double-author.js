import catalogCTA from '../../../../molecule/catalog-cta/test/fixtures/default';

const {rating, maxRating, linkBuy, linkTry} = catalogCTA.props;

/* eslint-disable max-len */

export default {
  props: {
    rating,
    maxRating,
    linkBuy,
    linkTry,
    authors: [
      {
        name: 'ELEPHANT',
        href: 'http://google.fr',
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
      },
      {
        name: 'NEXSTAGE',
        href: 'http://www.nextstage.com/',
        logo: {
          src: 'https://s3-eu-west-1.amazonaws.com/static.coorpacademy.com/content/CoorpAcademy/content/cockpit-up/poster/ns2x-1477319801703.png',
          href: '/nextstage'
        },
        socialLinks: [
          {
            type: 'linkedin',
            link: 'https://fr.linkedin.com/company/nextstage'
          }
        ]
      }
    ]
  }
};
