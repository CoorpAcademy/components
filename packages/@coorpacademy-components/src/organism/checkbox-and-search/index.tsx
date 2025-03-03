import React from 'react';
import {CheckboxAndSearchProps} from './props';

const FiltersWithCkeckboxAndSearch = (props: CheckboxAndSearchProps) => {
  const {title, type, withSearch, options} = props;
  // eslint-disable-next-line no-console
  console.log(title, type, withSearch, options);
  return <p>FiltersWithCkeckboxAndSearch</p>;
};

export default FiltersWithCkeckboxAndSearch;
