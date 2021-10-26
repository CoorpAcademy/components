import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const SearchResultItem = props => {
  const {text, information, selected} = props;

  return (
    <div className={classnames(style.container, selected ? style.selected : style.unselected)}>
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
