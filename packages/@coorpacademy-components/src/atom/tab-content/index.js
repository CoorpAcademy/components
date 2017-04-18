import React, {PropTypes} from 'react';
import style from './style.css';

const TabContent = (props, context) => {
  const { translate } = context;

  const backgroundClassName = props.hideContentBackground ? style.hiddenBackground : style.greyBackground;
  return (
    <div className={style.content}>
      <div className={style.contentTitle}>
        {translate(props.titles[props.activeContent])}
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
  titles: PropTypes.object,
  hideContentBackground: PropTypes.bool,
  activeContent: PropTypes.string
};

export default TabContent;
