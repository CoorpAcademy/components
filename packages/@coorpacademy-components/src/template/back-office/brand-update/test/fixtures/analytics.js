import {defaultsDeep} from 'lodash/fp';
import Analytics from '../../../../../organism/brand-form/test/fixtures/analytics';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Analytics.props;

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
