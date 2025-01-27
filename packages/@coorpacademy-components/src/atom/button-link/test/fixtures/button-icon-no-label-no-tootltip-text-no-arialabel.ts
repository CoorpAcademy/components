import {Fixture} from '../../types';

const fixture: Fixture = {
  props: {
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
