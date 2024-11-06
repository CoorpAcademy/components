import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaSolidContentContentBookAdd as CockpitIcon,
  NovaSolidUsersActionsUser as ManageUserIcon,
  NovaSolidFilesBasicFileUpload2 as UploadUserIcon,
  NovaSolidEmailAtSign as ManageEmailIcon,
  NovaSolidDesignPaintBrush2 as LookAndFeelIcon,
  NovaSolidContentContentViewList as DashboardIcon,
  NovaSolidContentEditionFlash as MassiveBattleIcon,
  NovaSolidApplicationsWindowApplication5 as CmsIcon,
  NovaSolidBusinessBusinessGraphLine2 as AnalyticsIcon,
  NovaCompositionNavigationArrowRight as ActionIcon,
  NovaCompositionCoorpacademyOpenInNewTab as NewTabIcon,
  NovaLinePhoneMobilePhone as MobilePhone,
  NovaLineMessagesChatChatBubbleCircleQuestionMark as ChatBubbleCircleQuestionMark,
  NovaLineNetworkNetworkAlert as NetworkAlert,
  NovaLineObjectsBinoculars as Binoculaire,
  NovaLineContentEditionContentBook as ContentBook
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const {cm_primary_blue} = COLORS;

const getIcon = feature => {
  switch (feature) {
    case 'manage_users':
      return ManageUserIcon;
    case 'upload_users':
      return UploadUserIcon;
    case 'manage_email':
      return ManageEmailIcon;
    case 'massive_battle':
      return MassiveBattleIcon;
    case 'cms':
      return CmsIcon;
    case 'look_and_feel':
      return LookAndFeelIcon;
    case 'dashboard':
      return DashboardIcon;
    case 'cockpit':
      return CockpitIcon;
    case 'analytics':
      return AnalyticsIcon;
    case 'binoculaire':
      return Binoculaire;
    case 'book':
      return ContentBook;
    case 'network':
      return NetworkAlert;
    case 'chat-bubble-question':
      return ChatBubbleCircleQuestionMark;
    case 'mobile-phone':
      return MobilePhone;
    default:
      return CockpitIcon;
  }
};

const getBackgroudRadialColors = feature => {
  switch (feature) {
    case 'manage_users':
    case 'upload_users':
      return {
        iconBackgroundColor: '#2EC1D6',
        degrees: '187',
        iconColor: null
      };
    case 'look_and_feel':
    case 'dashboard':
      return {
        iconBackgroundColor: '#18BB98',
        degrees: '167',
        iconColor: null
      };
    case 'cockpit':
      return {
        iconBackgroundColor: '#FF7043',
        degrees: '14',
        iconColor: null
      };
    case 'manage_email':
    case 'massive_battle':
    case 'learning_priorities':
    case 'cms':
      return {
        iconBackgroundColor: '#7340FF',
        degrees: '256',
        iconColor: null
      };
    case 'analytics':
      return {
        iconBackgroundColor: '#FF4040',
        degrees: '0',
        iconColor: null
      };
    case 'binoculaire':
      return {
        iconBackgroundColor: '#FFEFEB',
        iconColor: '#FF541F',
        degrees: '0'
      };
    case 'book':
      return {
        iconBackgroundColor: '#F1F6FE',
        degrees: '0',
        iconColor: cm_primary_blue
      };
    case 'network':
      return {
        iconBackgroundColor: '#FFE5E6',
        iconColor: '#FF0A0A',
        degrees: '0'
      };
    case 'chat-bubble-question':
      return {
        iconBackgroundColor: '#E8FCF8',
        iconColor: '#16AC8C',
        degrees: '0'
      };
    case 'mobile-phone':
      return {
        iconBackgroundColor: '#F4F0FF',
        degrees: '0',
        iconColor: '#5C21FF'
      };
    default:
      return null;
  }
};

const QuickAccessCard = (props, context) => {
  const {title, description, feature, href, openInNewTab = false, isMoocCard = false} = props;
  const {iconBackgroundColor, degrees, iconColor} = getBackgroudRadialColors(feature);
  const Icon = getIcon(feature);
  const newTabOnClick = openInNewTab ? <NewTabIcon className={style.newTabIcon} /> : null;

  return (
    <div data-name="quick-access-card" data-type={feature} className={style.quickAccess}>
      <Link href={href} target={openInNewTab ? '_blank' : '_self'} className={style.link}>
        <div
          style={
            !isMoocCard
              ? {
                  background: `radial-gradient(62.12% 56.45% at 0% 77.29%, 
            hsl(${degrees}deg 68% 40% / 20%) 0%, 
            hsl(${degrees}deg 68% 40% / 0%) 100%), 
          radial-gradient(113.85% 103.46% at 93.27% 7.88%,
            hsl(${degrees}deg 67% 51% / 15%) 0%, 
            hsl(${degrees}deg 67% 51% / 0%) 100%),
          radial-gradient(49.66% 49.63% at 78.65% 86.26%, 
            hsl(${degrees}deg 87% 91%) 0%, 
            hsl(${degrees}deg 87% 91% / 0%) 100%), 
          #FAFAFA`
                }
              : null
          }
          className={style.content}
        >
          <div
            className={style.iconFeatureWrapper}
            style={{
              backgroundColor: iconBackgroundColor
            }}
          >
            {feature !== 'learning_priorities' ? (
              <Icon className={style.iconFeature} style={{color: iconColor}} />
            ) : (
              <FaIcon className={style.iconFeature} iconName="sign-post" iconColor="white" />
            )}
          </div>
          <div className={style.title}>
            {title}
            {newTabOnClick}
          </div>
          <div className={style.description}>{description}</div>
          <div className={style.cta}>
            <div
              className={!isMoocCard ? style.iconGotoWrapper : null}
              style={
                !isMoocCard
                  ? {
                      backgroundColor: iconBackgroundColor
                    }
                  : null
              }
            >
              <div
                className={isMoocCard ? style.hoverMooc : style.hover}
                style={{
                  color: isMoocCard ? '#FFFFFF' : iconBackgroundColor
                }}
              >
                <ActionIcon className={style.iconGoto} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

QuickAccessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  openInNewTab: PropTypes.bool,
  isMoocCard: PropTypes.bool,
  feature: PropTypes.oneOf([
    'analytics',
    'cms',
    'cockpit',
    'massive_battle',
    'manage_email',
    'dashboard',
    'look_and_feel',
    'manage_users',
    'upload_users',
    'binoculaire',
    'book',
    'network',
    'chat-bubble-question',
    'mobile-phone'
  ])
};

export default QuickAccessCard;
