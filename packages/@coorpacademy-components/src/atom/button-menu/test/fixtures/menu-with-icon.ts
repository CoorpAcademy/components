import {ButtonMenuPropsFixture} from '../../types';

const menuWithIconFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [
      {
        'data-name': 'discard-button',
        label: 'Discard changes',
        buttonLinkType: 'tertiary',
        icon: {
          position: 'left',
          faIcon: {name: 'circle-xmark', color: '#515161', size: 14}
        },
        onClick: () => console.log('click on Discard changes'),
        type: 'defaultLeft'
      },
      {
        'data-name': 'archive-button',
        label: 'Archive',
        buttonLinkType: 'tertiary',
        icon: {
          position: 'left',
          type: 'chevron-left'
        },
        onClick: () => console.log('click on Archive'),
        type: 'defaultLeft'
      }
    ],
    'aria-label': 'button menu',
    'data-name': 'menu-with-icon'
  }
};

export default menuWithIconFixture;
