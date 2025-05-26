import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademySearchThin as CMSearchIcon,
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
    theme = 'default',
    dataTestId
  } = props;
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);

  const wrapperClass = classnames({
    [style.wrapperSearch]: theme === 'default',
    [style.coorpmanager]: theme === 'coorpmanager',
    [style.wrapperMooc]: theme === 'mooc'
  });

  const searchClass = classnames({
    [style.search]: true,
    [style.mooc]: theme === 'mooc'
  });

  const isCoorpManager = theme === 'coorpmanager';
  const SearchIconComponent = isCoorpManager ? CMSearchIcon : SearchIcon;
  const showTitle = isCoorpManager;
  const showClearIcon = value && isCoorpManager;

  return (
    <div className={wrapperClass}>
      <label htmlFor="search" title={placeholder}>
        <SearchIconComponent className={style.searchIcon} />
        {showTitle ? (
          <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
            {placeholder}
          </span>
        ) : null}
      </label>
      <input
        data-name="search-input"
        data-testid={dataTestId}
        className={searchClass}
        aria-label={placeholder}
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        title={placeholder}
        value={value}
        onInput={handleChange}
        onFocus={onFocus}
        onChange={noop}
        onBlur={onBlur}
      />
      {showClearIcon ? <CloseIcon onClick={onClear} className={style.clearIcon} /> : null}
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
  theme: PropTypes.oneOf(['default', 'coorpmanager', 'mooc']),
  dataTestId: PropTypes.string
};

export default Search;
