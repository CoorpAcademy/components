/* eslint-disable css-modules/no-undef-class */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const SearchResultItem = props => {
  const {text, information} = props;

  return (
    <div className={style.container}>
      <div className={style.text}>{text}</div>
      <div className={style.information}>{information}</div>
    </div>
  );
};

SearchResultItem.propTypes = {
  text: PropTypes.string,
  information: PropTypes.string,
  selected: PropTypes.bool
};

export default SearchResultItem;
