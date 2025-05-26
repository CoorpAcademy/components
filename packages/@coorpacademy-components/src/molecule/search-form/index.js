import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Search from '../../atom/input-search';
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
    'search-reset-aria-label': searchResetAriaLabel,
    dataTestId,
    theme
  } = props;
  const handleSubmit = useMemo(
    () => evt => {
      evt.preventDefault();
      return onSubmit && onSubmit(evt);
    },
    [onSubmit]
  );

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
        dataTestId={dataTestId}
        theme={theme}
      />
      <div
        data-name="search-form-reset"
        aria-label={searchResetAriaLabel}
        onClick={onReset}
        className={search.value ? style.wrapperClear : style.wrapperNoClear}
      >
        <FontAwesomeIcon icon="xmark" className={style.clearIcon} />
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
  search: PropTypes.shape(Search.propTypes),
  'search-reset-aria-label': PropTypes.string,
  dataTestId: PropTypes.string,
  theme: PropTypes.string
};

export default SearchForm;
