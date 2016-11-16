import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandUploadLoading from '../../../../../organism/brand-upload/test/fixtures/loading';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'upload',
      ...BrandUploadLoading.props
    }
  })
};
