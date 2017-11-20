import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import SearchIcon from '@coorpacademy/nova-icons/composition/coorpacademy/search';
import Provider from '../../atom/provider';
import style from './style.css';

const Search = (props, context) => {
  const {value, placeholder, onChange} = props;
  const {skin} = context;
  const medium = get('common.medium', skin);
  const handleChange = e => onChange(e.target.value);

  return (
    <div>
      <SearchIcon color={medium} className={style.icon} />
      <input
        className={style.search}
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onInput={handleChange}
      />
    </div>
  );
};

Search.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
