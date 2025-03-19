import {FilterCheckboxAndSearchProps} from '../../props-types';
import defaultProps from './default';

const filterCheckboxWithoutSearch: {props: FilterCheckboxAndSearchProps} = {
  props: {
    ...defaultProps.props,
    searchOptions: undefined
  }
};
export default filterCheckboxWithoutSearch;
