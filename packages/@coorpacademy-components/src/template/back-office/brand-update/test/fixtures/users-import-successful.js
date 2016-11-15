import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandUploadSuccessful from '../../../../../organism/brand-upload/test/fixtures/successful';
import Users from './users';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      type: 'upload',
      ...BrandUploadSuccessful.props
    }
  })
};
