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
  NovaCompositionCoorpacademyOpenInNewTab as NewTabIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import style from './style.css';

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
    default:
      return CockpitIcon;
  }
};

const getBackgroudRadialColors = feature => {
  switch (feature) {
    case 'manage_users':
    case 'upload_users':
      return {
        iconColor: '#2EC1D6',
        degrees: '187'
      };
    case 'look_and_feel':
    case 'dashboard':
      return {
        iconColor: '#18BB98',
        degrees: '167'
      };
    case 'cockpit':
      return {
        iconColor: '#FF7043',
        degrees: '14'
      };
    case 'manage_email':
    case 'massive_battle':
    case 'cms':
      return {
        iconColor: '#7340FF',
        degrees: '256'
      };
    case 'analytics':
      return {
        iconColor: '#FF4040',
        degrees: '0'
      };
    default:
      return null;
  }
};

const QuickAccessCard = (props, context) => {
  const {title, description, feature, href, _blank} = props;
  const {iconColor, degrees} = getBackgroudRadialColors(feature);
  const Icon = getIcon(feature);
  const newTabOnClick = _blank ? <NewTabIcon className={style.newTabIcon} /> : null;

  return (
    <div data-name="card" data-type={feature} className={style.quickAccess}>
      <Link href={href} target={_blank ? '_blank' : '_self'} className={style.link}>
        <div
          style={{
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
          }}
          className={style.content}
        >
          <div
            className={style.iconFeatureWrapper}
            style={{
              backgroundColor: iconColor
            }}
          >
            <Icon className={style.iconFeature} />
          </div>
          <div className={style.title}>
            {title}
            {newTabOnClick}
          </div>
          <div className={style.description}>{description}</div>
          <div
            className={style.iconGotoWrapper}
            style={{
              backgroundColor: iconColor
            }}
          >
            <div
              className={style.hover}
              style={{
                color: iconColor
              }}
            >
              <ActionIcon className={style.iconGoto} />
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
  _blank: PropTypes.bool,
  feature: PropTypes.oneOf([
    'analytics',
    'cms',
    'cockpit',
    'massive_battle',
    'manage_email',
    'dashboard',
    'look_and_feel',
    'manage_users',
    'upload_users'
  ])
};

export default QuickAccessCard;
