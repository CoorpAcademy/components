import defaultsDeep from 'lodash/fp/defaultsDeep';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    multiple: true,
    options: [
      {
        name: 'Pouet',
        value: 'Pouet',
        selected: false
      },
      {
        name: 'Pouet2',
        value: 'Pouet2',
        selected: true
      },
      {
        name: 'Pouet3',
        value: 'Pouet3',
        selected: false
      },
      {
        name: 'Pouet4',
        value: 'Pouet4',
        selected: true
      },
      {
        name: 'Pouet5',
        value: 'Pouet5',
        selected: true
      },
      {
        name: 'Pouet6',
        value: 'Pouet6',
        selected: false
      }
    ]
  })
};
