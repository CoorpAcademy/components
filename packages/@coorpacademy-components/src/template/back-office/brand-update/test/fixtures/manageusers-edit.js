import {defaultsDeep} from 'lodash/fp';
import UserEdit from '../../../../../organism/brand-form/test/fixtures/manageusers-edit';
import Users from './default';

const {props} = Users;
const content = UserEdit.props;

export default {
  props: defaultsDeep(props, {
    content: {
      ...content,
      type: 'form'
    }
  })
};
