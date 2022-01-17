import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyCmLoader as CMLoader} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import style from './style.css';

const Loader = ({className, theme = 'default'}) => {
  return theme !== 'default' ? (
    <div data-name="loader" className={classnames(style.cmLoaderContainer, className)}>
      <CMLoader className={style.cmLoaderGrey} />
      <CMLoader className={style.cmLoaderLightGrey} />
      <CMLoader className={style.cmLoaderBlue} />
    </div>
  ) : (
    <div data-name="loader" className={classnames(style.container, className)}>
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
  className: PropTypes.string,
  theme: PropTypes.oneOf(['default', 'coorpmanager'])
};

export default Loader;
