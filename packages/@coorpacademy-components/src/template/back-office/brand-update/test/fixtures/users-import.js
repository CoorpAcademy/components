import defaultsDeep from 'lodash/fp/defaultsDeep';
import UserImport from '../../../../../organism/brand-form/test/fixtures/user-import';
import Users from './users';

const {props} = Users;
const {groups} = UserImport.props;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'form',
      groups
    }
  })
};
