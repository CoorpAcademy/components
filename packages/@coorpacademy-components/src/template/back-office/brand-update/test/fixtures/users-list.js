import defaultsDeep from 'lodash/fp/defaultsDeep';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'list',
      createHref: '',
      search: {
        value: '',
        placeholder: '',
        onChange: () => {}
      },
      pagination: {
        value: '',
        nextHref: '',
        previousHred: ''
      },
      displayOptions: {
        value: '',
        values: ['', '', ''],
        onChange: () => {}
      },
      lines: [{
        fields: ['', '', '', ''],
        editHref: () => {}
      }],
      columns: [{
        title: '',
        filtered: false,
        options: [{
          values: [{
            title: 'Sort A -> Z',
            onChange: () => {},
            selected: false
          },
          {
            title: 'Sort Z -> A',
            onChange: () => {},
            selected: false
          }]
        }]
      }]
    }
  })
};
