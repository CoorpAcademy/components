import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Search = props => {
  const {
    value,
    placeholder,
    onChange
  } = props;

  const handleChange = e => onChange(e.target.value);

  return (
    <div className={style.wrapper}>
      <input
        className={style.search}
        type='text'
        name='search'
        placeholder={placeholder}
        value={value}
        onInput={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
