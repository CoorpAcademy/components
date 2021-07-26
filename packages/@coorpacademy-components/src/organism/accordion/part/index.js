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
  NovaCompositionCoorpacademyDashboard as DashboardIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyAnimation as AnimationIcon,
  NovaCompositionCoorpacademyAdministration as AdministrationIcon,
  NovaCompositionCoorpacademyContentCreation as ContentCreationIcon,
  NovaCompositionCoorpacademyEditorialization as EditorializationIcon,
  NovaCompositionCoorpacademyOpenInNewTab as OpenInNewTabIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
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
  label: style.titleLabel,
  selectedLabel: style.titleLabel,
  title: style.setupTitle,
  container: style.container,
  openHeader: style.openHeader,
  closedHeader: style.closedHeader,
  default: null
};

const setupThemeStyle = {
  titleIcon: style.titleIcon,
  titleActivatedIcon: style.setupTitleActivatedIcon,
  label: style.setupTitleLabel,
  selectedLabel: style.setupSelectedTitleLabel,
  setupSelectedTitle: style.setupSelectedTitle,
  selectedTitle: style.selectedTitle,
  title: style.setupTitle,
  container: style.setupContainer,
  openHeader: style.coorpManagerOpenHeader,
  closedHeader: style.coorpManagerClosedHeader
};

const PartItem = ({
  skin,
  isSelected,
  lessMoreIconType,
  iconType,
  onClick,
  isOpen,
  title,
  type,
  theme
}) => {
  const Icon = ICON_TYPES[iconType];
  const MoreIcon = MORE_ICONS_TYPES[lessMoreIconType];
  const LessIcon = LESS_ICONS_TYPES[lessMoreIconType];
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);
  const openIconClassName = isOpen ? style.openIconActivated : style.openIcon;
  const closeIconClassName = !isOpen ? style.closeIconActivated : style.closeIcon;
  const iconColor = isSelected ? style.iconBlue : style.iconGrey;
  const themeStyle = theme === 'setup' ? setupThemeStyle : defaultStyle;

  return (
    <div className={style.wrapper}>
      {theme === 'setup' ? (
        <div
          className={classnames(style.border, isSelected ? style.borderBgBlue : style.borderBgNone)}
        />
      ) : null}
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
              className={classnames(
                isSelected ? themeStyle.titleActivatedIcon : themeStyle.titleIcon,
                iconColor
              )}
            />
          ) : null}
          <h3 className={isSelected ? themeStyle.selectedLabel : themeStyle.label}>{title}</h3>
        </div>
        {type !== 'iconLink' ? (
          <div>
            <MoreIcon className={closeIconClassName} color={darkColor} />
            <LessIcon className={openIconClassName} color={mediumColor} />
          </div>
        ) : (
          <OpenInNewTabIcon className={style.newTabIcon} />
        )}
      </div>
    </div>
  );
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
    isSelected = false,
    type,
    href
  } = props;
  const [isOpen, updateIsOpen] = React.useState(false);
  const themeStyle = theme === 'setup' ? setupThemeStyle : defaultStyle;

  function handleOnClick() {
    updateIsOpen(state => !state);
    onClick();
  }
  return (
    <div data-name="accordionPart" className={themeStyle[theme]}>
      {type === 'iconLink' ? (
        <Link
          onClick={onClick}
          skinHover
          href={href}
          data-name={`link-item`}
          style={{
            textDecoration: 'none'
          }}
        >
          <PartItem
            skin={skin}
            title={title}
            content={content}
            iconType={iconType}
            lessMoreIconType={lessMoreIconType}
            theme={theme}
            onClick={handleOnClick}
            isOpen={isOpen}
            isSelected={isSelected}
            type={type}
          />
        </Link>
      ) : (
        <PartItem
          skin={skin}
          title={title}
          content={content}
          iconType={iconType}
          lessMoreIconType={lessMoreIconType}
          theme={theme}
          onClick={handleOnClick}
          isOpen={isOpen}
          isSelected={isSelected}
          type={type}
        />
      )}
      {isOpen ? <div className={themeStyle.container}>{content}</div> : null}
    </div>
  );
};

AccordionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

AccordionPart.propTypes = {
  iconType: PropTypes.oneOf(keys(ICON_TYPES)),
  type: PropTypes.oneOf(['link', 'iconLink']),
  lessMoreIconType: PropTypes.oneOf(keys(LESS_ICONS_TYPES)),
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  theme: PropTypes.string,
  href: PropTypes.string
};

PartItem.propTypes = {
  ...AccordionPart.propTypes
};

export default AccordionPart;
