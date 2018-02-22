import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import noop from 'lodash/fp/noop';
import SearchIcon from '@coorpacademy/nova-icons/composition/coorpacademy/search';
// import SearchCancel from '@coorpacademy/nova-icons/composition/navigation/more';
import Provider from '../../atom/provider';
import style from './style.css';

const Search = (props, context) => {
  const {value, placeholder, onChange, onEnter} = props;
  const {skin} = context;
  const medium = get('common.medium', skin);
  // const dark = get('common.dark', skin);
  const handleChange = e => onChange(e.target.value);
  const handleOnEnter = k => {
    if (k.key === 'Enter' && onEnter) {
      return onEnter();
    }
  };

  return (
    <div className={style.wrapperSearch}>
      <SearchIcon color={medium} className={style.icon} />
      <input
        className={style.search}
        type="text"
        name="search"
        placeholder={placeholder}
        value={value}
        onChange={noop}
        onInput={handleChange}
        onKeyPress={handleOnEnter}
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
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func
};

export default Search;
