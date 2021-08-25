import {defaultsDeep} from 'lodash/fp';
import SSO from '../../../../../organism/brand-form/test/fixtures/sso';
import Default, {items} from './default';

const {props} = Default;
const {groups} = SSO.props;

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
