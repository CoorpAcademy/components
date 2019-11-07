import {defaultsDeep} from 'lodash/fp';
import BrandTable from '../../../../../organism/brand-table/test/fixtures/default';
import Users from './manageusers';

const {props} = Users;
const content = BrandTable.props;

export default {
  props: defaultsDeep(props, {
    content: defaultsDeep(content, {
      type: 'list'
    })
  })
};
