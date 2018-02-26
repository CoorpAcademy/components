import React from 'react';
import PropTypes from 'prop-types';
import Search from '../search';
import style from './style.css';

const SearchForm = props => {
  const {action, method, onSubmit, search} = props;
  const handleSubmit = evt => {
    evt.preventDefault();
    return onSubmit && onSubmit(evt);
  };

  return (
    <form className={style.form} action={action} method={method} onSubmit={handleSubmit}>
      <Search {...search} />
    </form>
  );
};

SearchForm.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
  search: PropTypes.shape(Search.propTypes)
};

export default SearchForm;
