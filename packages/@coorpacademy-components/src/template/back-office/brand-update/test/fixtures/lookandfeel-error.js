import {defaultsDeep} from 'lodash/fp';
import lookandfeel from './lookandfeel-modified';

const {props} = lookandfeel;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'error',
        message: 'There are errors in your changes, please review them before submitting again.'
      }
    ],
    content: {
      groups: [
        {
          fields: [
            {
              error: 'Color is not valid.'
            }
          ]
        }
      ]
    }
  })
};
