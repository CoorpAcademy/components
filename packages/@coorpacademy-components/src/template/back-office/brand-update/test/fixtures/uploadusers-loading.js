import {defaultsDeep} from 'lodash/fp';
import BrandUploadLoading from '../../../../../organism/brand-upload/test/fixtures/loading';
import Users from './uploadusers';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      ...BrandUploadLoading.props,
      type: 'upload'
    }
  })
};
