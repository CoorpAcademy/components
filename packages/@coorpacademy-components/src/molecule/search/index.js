import React, {PropTypes} from 'react';
import style from './style.css';

const Search = props => {
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

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
