import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
    'aria-label': 'Edit',
    tooltipText: 'Edit',
    useTitle: false,
    type: 'primary',
    customStyle: {
      width: 'fit-content',
      backgroundColor: 'transparent'
    },
    hoverBackgroundColor: '#EAEAEB',
    icon: {
      position: 'left',
      faIcon: {
        name: 'edit',
        color: '#515161',
        size: 16
      }
    },
    onClick: () => console.log('click')
  }
};
export default fixture;
