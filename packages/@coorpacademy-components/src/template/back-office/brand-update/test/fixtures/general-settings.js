import defaultsDeep from 'lodash/fp/defaultsDeep';
import GeneralSettings from '../../../../../organism/brand-form/test/fixtures/general-settings';
import Default from './default';

const {props} = Default;
const {groups} = GeneralSettings.props;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      groups
    }
  })
};
