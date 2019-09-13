import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandUpload from '../../../../../organism/brand-upload/test/fixtures/default';
import Users from './manageusers';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'upload',
      ...BrandUpload.props
    }
  })
};
