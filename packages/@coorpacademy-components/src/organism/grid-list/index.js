import React, {PropTypes} from 'react';
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
