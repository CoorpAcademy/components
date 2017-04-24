import React, {PropTypes} from 'react';
import style from './style.css';

const TabContent = (props, context) => {
  const { translate } = context;
  const { tabTitle } = props;

  const backgroundClassName = props.hideContentBackground ? style.hiddenBackground : style.greyBackground;
  return (
    <div className={style.content}>
      <div className={style.contentTitle}>
        {translate(tabTitle)}
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
