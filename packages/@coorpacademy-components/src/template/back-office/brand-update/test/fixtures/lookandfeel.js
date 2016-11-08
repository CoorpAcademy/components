import defaultsDeep from 'lodash/fp/defaultsDeep';
import LookAndFeel from '../../../../../organism/brand-form/test/fixtures/lookandfeel';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/lookandfeel';
import Default from './default';

const {props} = Default;
const {groups} = LookAndFeel.props;
const {tabs} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    tabs,
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Save changes'
    }
  })
};
