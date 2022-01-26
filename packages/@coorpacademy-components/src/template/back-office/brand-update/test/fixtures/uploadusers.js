import {defaultsDeep} from 'lodash/fp';
import BrandUpload from '../../../../../organism/brand-upload/test/fixtures/default';
import Users from './manageusers-edit';

const {props} = Users;

export default {
  props: defaultsDeep(props, {
    content: {
      ...BrandUpload.props,
      type: 'upload'
    }
  })
};
