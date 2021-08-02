import {sections, platformLinks} from './default';

const headerProps = {
  logo: {
    src: undefined,
    srcMobile: 'https://static.coorpacademy.com/content/up/raw/logo-generique-teams-mobile.png',
    href: '#'
  },
  platformLinks
};

export default {
  props: {
    ...headerProps,
    sections
  }
};
