import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Search from '../../atom/input-search';
import Icon from '../../atom/icon';
import style from './style.css';

const SearchForm = (props, context) => {
  const {
    action,
    method,
    onSubmit,
    onReset,
    search,
    onSearchFocus,
    onSearchBlur,
    onSearchKeyDown,
    inputRef,
    'search-reset-aria-label': searchResetAriaLabel,
    dataTestId,
    theme,
    searchIconAriaLabel
  } = props;
  const handleSubmit = useMemo(
    () => evt => {
      evt.preventDefault();
      return onSubmit && onSubmit(evt);
    },
    [onSubmit]
  );

  const handleReset = useMemo(
    () => evt => {
      evt.preventDefault();
      evt.stopPropagation();
      return onReset && onReset(evt);
    },
    [onReset]
  );

  const isMooc = theme === 'mooc';

  const clearClassName = search.value
    ? classnames(style.wrapperClear, isMooc && style.wrapperClearMooc)
    : style.wrapperNoClear;

  return (
    <form
      className={style.form}
      action={action}
      method={method}
      onSubmit={handleSubmit}
      data-name="searchForm"
      aria-label={search.placeholder}
    >
      <Search
        {...search}
        onFocus={onSearchFocus}
        onBlur={onSearchBlur}
        onKeyDown={onSearchKeyDown}
        inputRef={inputRef}
        dataTestId={dataTestId}
        theme={theme}
        searchIconAriaLabel={searchIconAriaLabel}
      />
      <div
        data-name="search-form-reset"
        aria-label={searchResetAriaLabel}
        onMouseDown={handleReset}
        className={clearClassName}
      >
        <Icon iconName="xmark" className={style.clearIcon} aria-label={searchResetAriaLabel} />
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onSearchFocus: PropTypes.func,
  onSearchBlur: PropTypes.func,
  onSearchKeyDown: PropTypes.func,
  inputRef: PropTypes.func,
  search: PropTypes.shape(Search.propTypes),
  'search-reset-aria-label': PropTypes.string,
  dataTestId: PropTypes.string,
  theme: PropTypes.string,
  searchIconAriaLabel: PropTypes.string
};

export default SearchForm;
