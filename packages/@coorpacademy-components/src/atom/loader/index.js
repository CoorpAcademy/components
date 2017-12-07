import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const Loader = ({className}) => {
  return (
    <div className={classnames(style.container, className)}>
      <div className={style.dots}>
        <div className={style.red} />
        <div className={style.blue} />
        <div className={style.green} />
        <div className={style.yellow} />
      </div>
    </div>
  );
};

Loader.propTypes = {
  className: PropTypes.string
};

export default Loader;
