import {defaultsDeep} from 'lodash/fp';
import Dashboard from '../../../../../organism/brand-form/test/fixtures/dashboard';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Dashboard.props;

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
