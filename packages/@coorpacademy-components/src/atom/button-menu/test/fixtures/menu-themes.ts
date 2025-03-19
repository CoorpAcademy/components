import {ButtonMenuPropsFixture} from '../../types';

const menuWithIconFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [
      {
        type: 'defaultLeft',
        icon: {
          position: 'left',
          theme: 'publish'
        },
        'data-name': 'published-button',
        label: 'Publish',
        buttonLinkType: 'tertiary',
        onClick: () => console.log('click on Publish button')
      },
      {
        type: 'defaultLeft',
        icon: {
          position: 'left',
          theme: 'archive'
        },
        'data-name': 'archive-button',
        label: 'Archive',
        buttonLinkType: 'tertiary',
        onClick: () => console.log('click on Archive changes')
      },
      {
        type: 'dangerousLeft',
        icon: {
          position: 'left',
          theme: 'delete'
        },
        'data-name': 'delete-button',
        label: 'Delete',
        buttonLinkType: 'tertiary',
        onClick: () => console.log('click on Delete changes')
      }
    ],
    'aria-label': 'button menu',
    'data-name': 'menu-with-icon'
  }
};

export default menuWithIconFixture;
