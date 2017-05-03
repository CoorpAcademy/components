import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const TabContent = (props, context) => {
  const { tabTitle } = props;

  const backgroundClassName = props.hideContentBackground ? style.hiddenBackground : style.greyBackground;
  return (
    <div className={style.content}>
      <div className={style.contentTitle}>
        {tabTitle}
      </div>
      <div className={backgroundClassName}>
        {props.children}
      </div>
    </div>
  );
};

TabContent.contextTypes = {
  translate: PropTypes.func
};

TabContent.propTypes = {
  tabTitle: PropTypes.string,
  hideContentBackground: PropTypes.bool
};

export default TabContent;
