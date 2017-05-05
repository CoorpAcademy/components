import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandUpload from '../../../../../organism/brand-upload/test/fixtures/default';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'success',
        message: 'Import successful',
        onClose: () => {}
      }
    ],
    content: {
      type: 'upload',
      ...BrandUpload.props
    }
  })
};
