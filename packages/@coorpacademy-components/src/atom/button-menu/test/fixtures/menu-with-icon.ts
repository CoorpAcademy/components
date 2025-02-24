import {ButtonMenuPropsFixture} from '../../types';

const menuWithIconFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [
      {
        'data-name': 'discard-button',
        label: 'Discard changes',
        linkType: 'tertiary',
        icon: {
          position: 'left',
          faIcon: {name: 'circle-xmark', color: '#515161', size: 14}
        },
        onClick: () => console.log('click Download Report'),
        customStyle: {
          color: '#1D1D2B',
          hoverBackgroundColor: '#EAEAEB'
        },
        isCustomSkillMenu: true
      },
      {
        'data-name': 'delete-button',
        label: 'Delete',
        linkType: 'tertiary',
        icon: {
          position: 'left',
          type: 'save'
        },
        onClick: () => console.log('click Download Report')
      }
    ],
    'aria-label': 'aria button',
    'data-name': 'menu-with-icon'
  }
};

export default menuWithIconFixture;
