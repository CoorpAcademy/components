import {defaultsDeep} from 'lodash/fp';
import Analytics from '../../../../../organism/brand-form/test/fixtures/analytics';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/analytics';
import Default from './default';

const {props} = Default;
const {groups} = Analytics.props;
const {items} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Save changes'
    }
  })
};
