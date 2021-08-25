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
