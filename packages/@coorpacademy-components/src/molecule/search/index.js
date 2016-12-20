import React from 'react';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    value: checker.string.optional,
    placeholder: checker.string,
    onChange: checker.func
  }),
  children: checker.none
});

const Search = ({children, ...props}) => {
  const {
    value,
    placeholder,
    onChange
  } = props;

  return (
    <div className={style.wrapper}>
      <input
        className={style.search}
        type='text'
        name='search'
        placeholder={placeholder}
        value={value}
        onInput={e => onChange(e.target.value)}
      />
    </div>
  );
};

Search.validate = createValidate(conditions);
export default Search;
