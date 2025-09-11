import React, {useMemo, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademySearchThin as CMSearchIcon,
  NovaCompositionCoorpacademySearch as SearchIcon,
  NovaSolidStatusClose as CloseIcon
} from '@coorpacademy/nova-icons';
import {noop, isEmpty, get} from 'lodash/fp';
import Provider from '../provider';
import style from './style.css';

const handleMouseDown = e => {
  e.preventDefault();
  e.stopPropagation();
};

function useHoverAndFocusWithin() {
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [hovered, setHovered] = useState(false);

  const ref = useRef(null);

  return {
    ref,
    isFocusWithin,
    hovered,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setIsFocusWithin(true),
    onBlur: e => {
      if (ref.current && !ref.current.contains(e.relatedTarget)) {
        setIsFocusWithin(false);
      }
    }
  };
}

const Search = (props, context) => {
  const {
    value,
    placeholder,
    onChange = noop,
    onClear = noop,
    onFocus,
    onBlur,
    onKeyDown,
    inputRef,
    theme = 'default',
    dataTestId,
    searchIconAriaLabel
  } = props;
  const {skin} = context;
  const primaryColor = get('common.primary', skin);
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const {
    ref,
    isFocusWithin,
    onFocus: onSearchFocus,
    onBlur: onSearchBlur,
    hovered,
    onMouseEnter,
    onMouseLeave
  } = useHoverAndFocusWithin();
  const handleKeyDown = useMemo(
    () => e => {
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [onKeyDown]
  );

  const isCoorpManager = theme === 'coorpmanager';
  const isMooc = theme === 'mooc';
  const isDefault = theme === 'default';

  const wrapperClass = classnames({
    [style.wrapperSearch]: isDefault,
    [style.coorpmanager]: isCoorpManager,
    [style.wrapperMooc]: isMooc
  });

  const wrapperParentClass = classnames({
    [style.wrapperMoocParent]: isMooc,
    [style.wrapperCoorpManagerParent]: isCoorpManager
  });

  const searchClass = classnames({
    [style.search]: true,
    [style.moocSearch]: isMooc
  });

  const SearchIconComponent = isCoorpManager ? CMSearchIcon : SearchIcon;
  const showTitle = isCoorpManager;
  const showClearIcon = value && isCoorpManager;

  return (
    <div
      className={wrapperParentClass}
      ref={ref}
      onFocus={onSearchFocus}
      onBlur={onSearchBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={wrapperClass}
        style={
          isMooc
            ? {
                boxShadow:
                  isFocusWithin || hovered
                    ? `0 0 0 2px ${primaryColor}`
                    : `0 0 0 2px white, 0 0 0 2px ${primaryColor}`,
                transition: 'box-shadow 0.3s ease-in-out'
              }
            : undefined
        }
      >
        <label htmlFor="search" title={placeholder}>
          <SearchIconComponent
            className={style.searchIcon}
            data-name="search-icon"
            onMouseDown={handleMouseDown}
            aria-label={searchIconAriaLabel}
            role="img"
          />
          {showTitle ? (
            <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
              {placeholder}
            </span>
          ) : null}
        </label>
        <input
          ref={inputRef}
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
          onKeyDown={handleKeyDown}
        />
        {showClearIcon ? <CloseIcon onClick={onClear} className={style.clearIcon} /> : null}
      </div>
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
  onKeyDown: PropTypes.func,
  inputRef: PropTypes.func,
  theme: PropTypes.oneOf(['default', 'coorpmanager', 'mooc']),
  dataTestId: PropTypes.string,
  searchIconAriaLabel: PropTypes.string
};

export default Search;
