import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademySearch1 as CMSearchIcon,
  NovaCompositionCoorpacademySearch as SearchIcon,
  NovaSolidStatusClose as CloseIcon
} from '@coorpacademy/nova-icons';
import {noop, isEmpty} from 'lodash/fp';
import Provider from '../provider';
import style from './style.css';

const Search = props => {
  const {
    value,
    placeholder,
    onChange = noop,
    onClear = noop,
    onFocus,
    onBlur,
    theme = 'default'
  } = props;
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const cmStyle = classnames(style.coorpmanager);
  const isDefaultTheme = theme === 'default';

  return (
    <div className={isDefaultTheme ? style.wrapperSearch : cmStyle}>
      <label htmlFor="search" title={placeholder}>
        {!isDefaultTheme ? (
          <CMSearchIcon className={style.searchIcon} />
        ) : (
          <SearchIcon className={style.searchIcon} />
        )}
        {!isDefaultTheme ? (
          <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
            {placeholder}
          </span>
        ) : null}
      </label>
      <input
        data-name="search-input"
        className={style.search}
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        value={value}
        onInput={handleChange}
        onFocus={onFocus}
        onChange={noop}
        onBlur={onBlur}
      />
      {value && !isDefaultTheme ? (
        <CloseIcon onClick={onClear} className={style.clearIcon} />
      ) : null}
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
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'coorpmanager'])
};

export default Search;
