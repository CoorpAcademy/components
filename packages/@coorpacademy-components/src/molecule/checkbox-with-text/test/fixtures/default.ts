import {CheckboxWithTextProps} from '../../prop-types';

const checkboxWithTextFixture: {props: CheckboxWithTextProps} = {
  props: {
    title: 'Text',
    name: 'name',
    checked: true,
    onChange: () => {
      console.log('onChange clicked');
    },
    'aria-label': 'aria-label',
    'data-name': 'data-name'
  }
};

export default checkboxWithTextFixture;
