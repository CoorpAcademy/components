import {noop} from 'lodash/fp';
import checkbox from './checkbox';

export default {
  props: {
    ...checkbox.props,
    checkbox: {...checkbox.props.checkbox, onChange: noop},
    subItems: [
      {ref: 'getting-started', title: 'Getting started', checkbox: {checked: true, onChange: noop}},
      {
        ref: 'working-together',
        title: 'Working together',
        checkbox: {checked: false, onChange: noop}
      },
      {
        ref: 'resolving-conflict',
        title: 'Resolving conflict',
        checkbox: {checked: false, onChange: noop}
      }
    ]
  }
};
