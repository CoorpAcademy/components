import {defaultsDeep} from 'lodash/fp';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    settings: [
      {
        title: 'Language',
        type: 'select',
        'aria-label': 'select language',
        options: {
          onChange: value => console.log(value),
          values: [
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
            }
          ]
        }
      },
      {
        title: 'Population',
        type: 'select',
        'aria-label': 'select population',
        options: {
          onChange: value => console.log(value),
          values: [
            {
              name: 'Pop1',
              value: 'Pouet',
              selected: false
            },
            {
              name: 'FGS FR',
              value: 'Pouet2',
              selected: true
            },
            {
              name: 'Pop3',
              value: 'Pouet3',
              selected: false
            }
          ]
        }
      },
      {
        title: 'Se déconnecter',
        'aria-label': 'logout',
        type: 'link',
        color: '#f73f52',
        hoverColor: '#C51023',
        options: {
          href: 'https://google.fr'
        }
      },
      {
        title: 'Godmode',
        type: 'switch',
        'aria-label': 'activate godmode',
        options: {
          onChange: value => console.log(value),
          value: true
        }
      },
      {
        title: 'Fast slides',
        type: 'switch',
        'aria-label': 'activate fast slides',
        options: {
          onChange: value => console.log(value),
          value: false
        }
      }
    ]
  })
};
