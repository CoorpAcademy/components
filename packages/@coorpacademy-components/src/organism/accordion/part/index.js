import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import MoreIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import KeyIcon from '@coorpacademy/nova-icons/solid/login/key-1';
import VideoIcon from '@coorpacademy/nova-icons/solid/videos/video-clip-3';
import LightBulbIcon from '@coorpacademy/nova-icons/solid/lights/lightbulb-4';
import LessIcon from '@coorpacademy/nova-icons/composition/navigation/less';
import Provider from '../../../atom/provider';
import style from './style.css';

const ICON_TYPES = {
  resources: VideoIcon,
  klf: KeyIcon,
  tips: LightBulbIcon
};

const AccordionPart = (props, context) => {
  const {skin} = context;
  const {title, content, iconType, onClick = noop, isOpen = false} = props;
  const OpenIcon = isOpen ? LessIcon : MoreIcon;
  const TitleIcon = ICON_TYPES[iconType];
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);

  return (
    <div>
      <div className={style.header} onClick={onClick}>
        <div className={style.title}>
          {TitleIcon ? <TitleIcon className={style.titleIcon} color="inherit" /> : null}
          <h3 className={style.titleLabel}>{title}</h3>
        </div>
        <OpenIcon className={style.icon} color={isOpen ? mediumColor : darkColor} /> </div>
      <div className={isOpen ? style.container : style.none}>
        {content}
      </div>
    </div>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(Object.keys(ICON_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

export default AccordionPart;
