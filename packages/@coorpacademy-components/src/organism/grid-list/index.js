import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const GridList = ({children}) => {
  return (
    <div className={style.wrapper}>
      {children}
    </div>
  );
};

GridList.propTypes = {};

export default GridList;
