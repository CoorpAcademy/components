import {defaultsDeep} from 'lodash/fp';
import LookAndFeel from '../../../../../organism/brand-form/test/fixtures/lookandfeel';
import Default, {items} from './default';

const {props} = Default;
const {groups} = LookAndFeel.props;

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
