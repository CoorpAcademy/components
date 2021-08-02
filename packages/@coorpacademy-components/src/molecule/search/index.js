import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {get, noop} from 'lodash/fp';
import {NovaCompositionCoorpacademySearch as SearchIcon} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import style from './style.css';

const Search = (props, context) => {
  const {value, placeholder, onChange = noop, onFocus, onBlur} = props;
  const {skin} = context;
  const dark = get('common.dark', skin);
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);

  return (
    <div className={style.wrapperSearch}>
      <label htmlFor="search">
        <SearchIcon color={dark} className={style.icon} />
      </label>
      <input
        data-name="search-input"
        className={style.search}
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onChange={noop}
        onInput={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default Search;
