import React from 'react';
import {noop, keys, get} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaCompositionNavigationMore as More,
  NovaLineLoginKey1 as KeyIcon,
  NovaLineVideosVideoClip3 as VideoIcon,
  NovaSolidLightsLightbulb4 as LightBulbIcon,
  NovaCompositionNavigationLess as Less,
  NovaCompositionNavigationArrowDown as ArrowIcon,
  NovaCompositionNavigationDashboard as DashboardIcon,
  NovaCompositionNavigationAnalytics as AnalyticsIcon,
  NovaCompositionNavigationAnimation as AnimationIcon,
  NovaCompositionNavigationAdministration as AdministrationIcon,
  NovaCompositionNavigationContentCreation as ContentCreationIcon,
  NovaCompositionNavigationEditorialization as EditorializationIcon,
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

const LESS_ICONS_TYPES = {
  default: Less,
  arrow: ArrowIcon
};

const MORE_ICONS_TYPES = {
  default: More,
  arrow: ArrowIcon
};

const defaultStyle = {
  titleIcon: style.titleIcon,
  lable: style.titleLabel,
  selectedLable: style.titleLabel,
  title: style.setupTitle,
  subTitle: style.setupPart,
  container: style.container,
  setup: style.setupPart,
  openHeader: style.openHeader,
  closedHeader: style.closedHeader,
  default: null
};

const setupThemeStyle = {
  titleIcon: style.titleIcon,
  titleActivatedIcon: style.setupTitleActivatedIcon,
  lable: style.setupTitleLabel,
  selectedLable: style.setupSelectedTitleLabel,
  setupSelectedTitle: style.setupSelectedTitle,
  selectedTitle: style.selectedTitle,
  title: style.setupTitle,
  subTitle: style.setupPart,
  container: style.setupContainer,
  openHeader: style.coorpManagerOpenHeader,
  closedHeader: style.coorpManagerClosedHeader
};

const AccordionPart = (props, context) => {
  const {skin} = context;
  const {
    title,
    content,
    iconType,
    lessMoreIconType = 'default',
    theme,
    onClick = noop,
    isOpen,
    isSelected = false
  } = props;
  const Icon = ICON_TYPES[iconType];
  const MoreIcon = MORE_ICONS_TYPES[lessMoreIconType];
  const LessIcon = LESS_ICONS_TYPES[lessMoreIconType];
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);
  const openIconClassName = isOpen ? style.openIconActivated : style.openIcon;
  const closeIconClassName = !isOpen ? style.closeIconActivated : style.closeIcon;

  const themeStyle = theme === 'setup' ? setupThemeStyle : defaultStyle;
  const iconColor = isOpen ? style.iconBlack : isSelected ? style.iconBlue : style.iconGrey;

  const hasChildren = typeof isOpen === 'boolean';

  return (
    <div data-name="accordionPart" className={themeStyle[theme]}>
      <div
        className={isSelected ? themeStyle.openHeader : themeStyle.closedHeader}
        data-type={iconType}
        onClick={onClick}
      >
        <div
          data-name="title"
          className={isSelected ? themeStyle.setupSelectedTitle : themeStyle.title}
        >
          {Icon ? (
            <Icon
              className={classnames(isSelected ? themeStyle.titleActivatedIcon : themeStyle.titleIcon, iconColor)}
            />
          ) : null}
          <h3 className={isOpen || isSelected ? themeStyle.selectedLable : themeStyle.lable}>
            {title}
          </h3>
        </div>
        {content ? (<div>
        <MoreIcon className={closeIconClassName} color={darkColor} />
        <LessIcon className={openIconClassName} color={mediumColor} />
        </div>) : null
        }
      </div>
      {isOpen ? <div className={themeStyle.container}>{content}</div> : null}
    </div>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(keys(ICON_TYPES)),
  lessMoreIconType: PropTypes.oneOf(keys(LESS_ICONS_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  isSelected: PropTypes.bool,
  theme: PropTypes.string
};

export default AccordionPart;
