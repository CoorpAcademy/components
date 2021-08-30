import {defaultsDeep} from 'lodash/fp';
import Cohort from '../../../../../organism/brand-form/test/fixtures/cohort';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Cohort.props;
export default {
  props: defaultsDeep(props, {
    items,
    notifications: [
      {
        type: 'error',
        message: 'There are errors in your changes, please review them before submitting again.',
        onClose: () => {}
      }
    ],
    content: {
      type: 'form',
      groups
    }
  })
};
