import defaultsDeep from 'lodash/fp/defaultsDeep';
import UserEdit from '../../../../../organism/brand-form/test/fixtures/user-edit';
import Users from './users';

const {props} = Users;
const {groups} = UserEdit.props;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      groups
    }
  })
};
