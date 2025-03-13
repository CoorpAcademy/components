import {FilterCheckboxAndSearchProps} from '../../props-types';
import defaultProps from './default';

const filterCheckboxWithoutSearch: {props: FilterCheckboxAndSearchProps} = {
  props: {
    ...defaultProps.props,
    withSearch: false
  }
};
export default filterCheckboxWithoutSearch;
