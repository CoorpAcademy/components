import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'text',
    label: 'Download',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    link: {
      href: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
      download: true
    }
  }
};
export default fixture;
