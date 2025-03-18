import {defaultsDeep} from 'lodash/fp';
import CheckboxSelected from './checkbox-selected';

const {props} = CheckboxSelected;

export default {
  props: defaultsDeep(props, {
    checkbox: {
      checked: true,
      onChange: value => console.log(value)
    },
    secondButtonLink: {
      'aria-label': 'Delete',
      type: 'primary',
      customStyle: {
        width: 'fit-content',
        backgroundColor: 'transparent'
      },
      hoverBackgroundColor: '#EAEAEB',
      icon: {
        position: 'left',
        faIcon: {
          name: 'trash',
          color: '#515161',
          size: 16
        }
      },
      onClick: () => console.log('Click on delete icon')
    }
  })
};
