import defaultsDeep from 'lodash/fp/defaultsDeep';
import thematique from './thematique';

const {props} = thematique;

export default {
  props: defaultsDeep(props, {
    options: [
      {
        name: 'Pouet',
        value: 'Pouet',
        selected: false
      },
      {
        name: 'Very long pouet pouet pouet pouet pouet pouet 1',
        value: 'Pouet2',
        selected: true
      },
      {
        name: 'Very long pouet pouet pouet pouet pouet pouet 2',
        value: 'Pouet3',
        selected: false
      },
      {
        name: 'Pouet4',
        value: 'Pouet4',
        selected: false
      },
      {
        name: 'Pouet5',
        value: 'Pouet5',
        selected: false
      },
      {
        name: 'Pouet6',
        value: 'Pouet6',
        selected: false
      }
    ]
  })
};
