import React from 'react';
import PropTypes from 'prop-types';
import Search from '../../atom/cm-input-search';
import style from './style.css';

const SearchAndChipsResults = props => {
  const {search} = props;
  return (
    <div className={style.container}>
      <Search {...search} />
    </div>
  );
};

SearchAndChipsResults.propTypes = {
  selectAllButton: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  search: PropTypes.shape(Search.PropTypes),
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      information: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  results: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      information: PropTypes.string,
      onClick: PropTypes.func
    })
  )
};

export default SearchAndChipsResults;
