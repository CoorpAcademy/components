export default {
  props: {
    authors: [
      {
        name: 'ELEPHANT',
        href: '/author/elephant',
        more: 'Author Details',
        logo: {
          src: 'https://static-staging.coorpacademy.com/upload/up/partners/1472198693277logo_elephant.png',
          href: 'http://google.fr',
          alt: "ELEPHANT's author logo"
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
        href: '/nextstage',
        more: 'Author Details',
        logo: {
          src: 'https://static-staging.coorpacademy.com/upload/up/partners/1472198693277logo_elephant.png',
          href: 'http://www.nextstage.com/',
          alt: "NEXSTAGE's author logo"
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
