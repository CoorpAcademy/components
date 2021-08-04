import React from 'react';
import {noop, keys, get} from 'lodash/fp';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  NovaCompositionNavigationMore as MoreIcon,
  NovaLineLoginKey1 as KeyIcon,
  NovaLineVideosVideoClip3 as VideoIcon,
  NovaSolidLightsLightbulb4 as LightBulbIcon,
  NovaCompositionNavigationLess as LessIcon,
  NovaCompositionCoorpacademyDashboard as DashboardIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyAnimation as AnimationIcon,
  NovaCompositionCoorpacademyAdministration as AdministrationIcon,
  NovaCompositionCoorpacademyContentCreation as ContentCreationIcon,
  NovaCompositionCoorpacademyEditorialization as EditorializationIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import style from './style.css';

const ICON_TYPES = {
  resources: VideoIcon,
  klf: KeyIcon,
  tips: LightBulbIcon,
  arrow: LightBulbIcon,
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  administration: AdministrationIcon,
  animation: AnimationIcon,
  contentCreation: ContentCreationIcon,
  editorialization: EditorializationIcon
};

const themeStyle = {
  setup: style.setupPart,
  default: null
};

export const PartItem = ({
  isOpen,
  iconType,
  iconColor,
  onClick,
  theme,
  title,
  children,
  iconsChildren
}) => {
  const TitleIcon = ICON_TYPES[iconType];
  return (
    <div data-name="accordionPart" className={themeStyle[theme]}>
      <div
        className={isOpen ? style.openHeader : style.closedHeader}
        data-type={iconType}
        onClick={onClick}
      >
        <div data-name="title" className={style.title}>
          {TitleIcon ? (
            <TitleIcon className={classNames(style.titleIcon, iconColor)} color="inherit" />
          ) : null}
          <h3 className={style.titleLabel}>{title}</h3>
        </div>
        {iconsChildren}
      </div>
      {children}
    </div>
  );
};

const MoreLessIcons = ({moreClassName, lessClassName, darkColor, mediumColor}) => {
  return (
    <div>
      <MoreIcon className={moreClassName} color={darkColor} />
      <LessIcon className={lessClassName} color={mediumColor} />
    </div>
  );
};

const AccordionPart = (props, context) => {
  const {skin} = context;
  const {title, content, iconType, theme, onClick = noop, isOpen = false} = props;
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);
  const lessClassName = isOpen ? style.openIconActivated : style.openIcon;
  const moreClassName = !isOpen ? style.closeIconActivated : style.closeIcon;

  return (
    <PartItem
      title={title}
      iconType={iconType}
      theme={theme}
      mediumColor={mediumColor}
      darkColor={darkColor}
      onClick={onClick}
      iconsChildren={
        <MoreLessIcons
          moreClassName={moreClassName}
          lessClassName={lessClassName}
          darkColor={darkColor}
          mediumColor={mediumColor}
        />
      }
    >
      {isOpen ? <div className={style.container}>{content}</div> : null}
    </PartItem>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(keys(ICON_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  theme: PropTypes.string
};

MoreLessIcons.propTypes = {
  moreClassName: PropTypes.string,
  lessClassName: PropTypes.string,
  darkColor: PropTypes.string,
  mediumColor: PropTypes.string
};

PartItem.propTypes = {
  ...AccordionPart.propTypes,
  iconColor: PropTypes.string,
  iconsChildren: PropTypes.node
};

export default AccordionPart;
