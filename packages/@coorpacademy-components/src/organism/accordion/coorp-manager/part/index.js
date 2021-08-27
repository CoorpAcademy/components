import React from 'react';
import {noop, keys, get} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidLightsLightbulb4 as LightBulbIcon,
  NovaCompositionNavigationArrowDown as ArrowIcon,
  NovaCompositionCoorpacademyOpenInNewTab as OpenInNewTabIcon,
  NovaCompositionCoorpacademyDashboard as DashboardIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaCompositionCoorpacademyAnimation as AnimationIcon,
  NovaCompositionCoorpacademyAdministration as AdministrationIcon,
  NovaCompositionCoorpacademyContentCreation as ContentCreationIcon,
  NovaCompositionCoorpacademyEditorialization as EditorializationIcon
} from '@coorpacademy/nova-icons';
import Link from '../../../../atom/link';
import Provider from '../../../../atom/provider';
import style from './style.css';

const ICON_TYPES = {
  arrow: LightBulbIcon,
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  administration: AdministrationIcon,
  animation: AnimationIcon,
  contentCreation: ContentCreationIcon,
  editorialization: EditorializationIcon
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

const MoreLessIcons = ({type, moreClassName, lessClassName, darkColor, mediumColor}) => {
  return type !== 'iconLink' ? (
    <div>
      <ArrowIcon className={moreClassName} color={darkColor} />
      <ArrowIcon className={lessClassName} color={mediumColor} />
    </div>
  ) : (
    <OpenInNewTabIcon className={style.newTabIcon} />
  );
};

const Part = ({
  skin,
  selected,
  iconType,
  onParentClick,
  onClick,
  isOpen,
  title,
  type,
  children,
  theme
}) => {
  const darkColor = get('common.dark', skin);
  const mediumColor = get('common.medium', skin);
  const lessClassName = isOpen ? style.openIconActivated : style.openIcon;
  const moreClassName = !isOpen ? style.closeIconActivated : style.closeIcon;
  const iconColor = selected ? style.iconBlue : style.iconGrey;
  const hoverIconColor = selected && style.blueTitleIcon;
  const selectedBlackLabel = selected && style.labelBlack;
  const Icon = ICON_TYPES[iconType];
  const isLink = type === 'iconLink' ;

  return (
    <div className={style.wrapper}>
      {theme === 'setup' ? (
        <div
          className={classnames(style.border, selected ? style.borderBgBlue : style.borderBgNone)}
        />
      ) : null}
      <div data-type={iconType} onClick={onParentClick} style={{flex: 1}}>
        <div data-name="accordionPart" className={style.setupPart}>
          <div className={style.header} data-type={iconType} onClick={onClick}>
            <div data-name="title" className={style.title}>
              {Icon ? (
                <Icon
                  className={classnames(style.titleIcon, iconColor, hoverIconColor)}
                  color="inherit"
                />
              ) : null}   <h3 className={classnames(style.titleLabel, selectedBlackLabel)}>{title}
              {isLink ? (
                <OpenInNewTabIcon className={style.newTabIcon} />
            ) : (
              null
            )}</h3>
            </div>
            {!isLink ? (
              <div>
                <ArrowIcon className={moreClassName} color={darkColor} />
                <ArrowIcon className={lessClassName} color={mediumColor} />
              </div>
            ) : (
              null
            )}
          </div>
          {children}
        </div>
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
    theme,
    onClick = noop,
    selected = false,
    type,
    href,
    isOpen,
    onUpdateOpenedTab
  } = props;

  const themeStyle = theme === 'setup' ? setupThemeStyle : defaultStyle;

  function handleParentClick() {
    onUpdateOpenedTab();
    onClick();
  }

  return (
    <div data-name="accordionPart" className={themeStyle[theme]}>
      {type === 'iconLink' ? (
        <Link
          onClick={handleParentClick}
          skinHover
          href={href}
          data-name={`link-item`}
          target={'_blank'}
          style={{
            textDecoration: 'none'
          }}
        >
          <Part
            skin={skin}
            title={title}
            content={content}
            iconType={iconType}
            theme={theme}
            onParentClick={handleParentClick}
            onClick={onClick}
            isOpen={isOpen}
            selected={selected}
            type={type}
          />
        </Link>
      ) : (
        <Part
          skin={skin}
          title={title}
          content={content}
          iconType={iconType}
          theme={theme}
          onParentClick={handleParentClick}
          onClick={onClick}
          selected={selected}
          isOpen={isOpen}
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
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  theme: PropTypes.string,
  href: PropTypes.string,
  isOpen: PropTypes.bool,
  onUpdateOpenedTab: PropTypes.func
};

MoreLessIcons.propTypes = {
  type: PropTypes.string,
  moreClassName: PropTypes.string,
  lessClassName: PropTypes.string,
  darkColor: PropTypes.string,
  mediumColor: PropTypes.string
};

Part.propTypes = {
  ...AccordionPart.propTypes
};

export default AccordionPart;
