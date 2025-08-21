import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    type: 'text',
    label: 'FR',
    'aria-label': 'aria button',
    'data-name': 'default-button',
    icon: [
      {
        position: 'left',
        faIcon: {
          name: 'globe',
          size: 14,
          color: '#515161'
        }
      },
      {
        position: 'right',
        faIcon: {
          name: 'truck',
          size: 14,
          color: '#515161'
        }
      }
    ],
    onClick: () => console.log('click')
  }
};
export default fixture;
