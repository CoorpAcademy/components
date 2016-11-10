import defaultsDeep from 'lodash/fp/defaultsDeep';
import Users from './users';
import BrandTable from '../../../../../organism/brand-table/test/fixtures/default';

const {props} = Users;
const content = BrandTable.props

export default {
  props: defaultsDeep(props, {
    content: defaultsDeep(content, {
      type: 'list'
    })
  })
};
