import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import MoreNovaIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import KeyIcon from '@coorpacademy/nova-icons/line/login/key-1';
import VideoIcon from '@coorpacademy/nova-icons/line/videos/video-clip-3';
import LightBulbIcon from '@coorpacademy/nova-icons/solid/lights/lightbulb-4';
import LessNovaIcon from '@coorpacademy/nova-icons/composition/navigation/less';
import ArrowUpIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-top';
import Provider from '../../../atom/provider';
import style from './style.css';

const ICON_TYPES = {
  resources: VideoIcon,
  klf: KeyIcon,
  tips: LightBulbIcon,
  plus: MoreNovaIcon,
  minus: LessNovaIcon,
  arrowUp: ArrowUpIcon,
  arrowDown: ArrowUpIcon,
};
 
const AccordionPart = (props, context) => {
  const {skin} = context;
  const {title, content, iconType, onClick = noop, isOpen = false, moreIconType = 'plus', lessIconType = 'minus'} = props;
  const TitleIcon = ICON_TYPES[iconType];
  const MoreIcon = ICON_TYPES[moreIconType];
  const LessIcon = ICON_TYPES[lessIconType];
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);
  const openIconClassName = isOpen ? style.openIconActivated : style.openIcon;
  const closeIconClassName = !isOpen ? style.closeIconActivated : style.closeIcon;

  return (
    <div data-name="accordionPart">
      <div
        className={isOpen ? style.openHeader : style.closedHeader}
        data-type={iconType}
        onClick={onClick}
      >
        <div data-name="title" className={style.title}>
          {TitleIcon ? <TitleIcon className={style.titleIcon} color="inherit" /> : null}
          <h3 className={style.titleLabel}>{title}</h3>
        </div>
        <MoreIcon className={closeIconClassName} color={darkColor} />
        <LessIcon className={openIconClassName} color={mediumColor} />
      </div>
      {isOpen ? <div className={style.container}>{content}</div> : null}
    </div>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.defaultProps = {
  moreIconType: 'plus',
  lessIconType: 'minus',
};

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(Object.keys(ICON_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

export default AccordionPart;
