import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandUploadDropping from '../../../../../organism/brand-upload/test/fixtures/dropping';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'upload',
      ...BrandUploadDropping.props
    }
  })
};
