import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaLienLoginKey1 as KeyIcon,
  NovaLineVideosVideoClip3 as VideoIcon,
  NovaSolidLightsLightBulb4 as LightBulbIcon,
  NovaCompositionNavigationLess as LessIcon
} from '@coorpacademy/nova-icons';
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
  const TitleIcon = ICON_TYPES[iconType];
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

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(Object.keys(ICON_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

export default AccordionPart;
