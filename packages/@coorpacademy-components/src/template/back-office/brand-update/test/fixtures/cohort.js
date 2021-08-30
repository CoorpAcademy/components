import {defaultsDeep} from 'lodash/fp';
import Cohort from '../../../../../organism/brand-form/test/fixtures/cohort';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Cohort.props;
export default {
  props: defaultsDeep(props, {
    items,
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Refresh population',
      isModified: true,
      disabled: false,
      tooltip: {
        title: 'If you want to assign all users to their new cohorts',
        place: 'top'
      }
    }
  })
};
