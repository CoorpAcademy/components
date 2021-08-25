import {defaultsDeep} from 'lodash/fp';
import Cohort from '../../../../../organism/brand-form/test/fixtures/cohort';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/cohort';
import Default from './default';

const {props} = Default;
const {groups} = Cohort.props;
const {items} = BrandTabs.props;
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
