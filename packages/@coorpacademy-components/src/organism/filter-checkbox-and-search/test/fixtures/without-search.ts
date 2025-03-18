import {FilterCheckboxAndSearchProps} from '../../props-types';
import defaultProps from './default';

const filterCheckboxWithoutSearch: {props: FilterCheckboxAndSearchProps} = {
  props: {
    ...defaultProps.props,
    onSearchProps: undefined
  }
};
export default filterCheckboxWithoutSearch;
