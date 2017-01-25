import React, {PropTypes} from 'react';
import style from './style.css';

const MoocHeader = props => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.logoWrapper}>
          <a href="#">
            <img src="https://www.coorpacademy.com/assets/img/logo.svg" />
          </a>
        </div>
        <div className={style.menuWrapper}>
          <div className={style.pages}>
            <div className={style.page}>Explore<span className={style.bar} /></div>
            <div className={style.page}>Battles<span className={style.bar} /></div>
            <div className={style.page}>News<span className={style.bar} /></div>
          </div>
          <div className={style.links}>
            <div className={style.link}>Connexion<div className={style.fill} /></div>
            <div className={style.link}>Inscription<div className={style.fill} /></div>
          </div>
          <div className={style.settings}>
            <div className={style.settingsToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

MoocHeader.propTypes = {

};
export default MoocHeader;
