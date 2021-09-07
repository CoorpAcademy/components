import React from 'react';
import {
  NovaCompositionCoorpacademyEye as EyeIcon,
  NovaCompositionCoorpacademyAnalytics as AnalyticsIcon,
  NovaSolidContentContentViewModule1 as ListIcon,
  NovaSolidLoginLogout1 as LogoutIcon
} from '@coorpacademy/nova-icons';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import style from './style.css';

const SetupHeader = props => {
  const {platformName, itemsHrefs, href, user = {}, logo, logoMobile, isHome = false} = props;
  const {image = ''} = user;

  return (
    <div className={style.wrapper}>
      {isHome ? (
        <div className={style.logo}>
          <Link href={href}>
            <Picture className={style.logoDesktop} src={logo} />
            <Picture className={style.logoMobile} src={logoMobile} />
          </Link>
        </div>
      ) : (
        <ul className={style.list}>
          <Link
            href={itemsHrefs.platformList}
            className={classnames(style.element, style.platformList)}
          >
            <ListIcon className={style.icon} />
            <li>Platform list</li>
          </Link>
          <li className={classnames(style.element, style.platformName)}>{platformName}</li>
        </ul>
      )}
      <ul className={style.list}>
        <Link
          href={itemsHrefs.globalAnalytics}
          className={classnames(style.element, style.globalAnalytics)}
        >
          <AnalyticsIcon className={style.icon} />
          <li>Global Analytics</li>
        </Link>
        {isHome ? null : (
          <Link
            href={itemsHrefs.seeMyPlatform}
            className={classnames(style.element, style.seeMyPlatform)}
          >
            <EyeIcon height={20} width={28} className={style.icon} />
            <li>See my Platform</li>
          </Link>
        )}
        <Link>
          <li className={style.profilePicture}>
            <img src={image} />
          </li>
        </Link>
        <Link href={itemsHrefs.logOut} className={classnames(style.element, style.logOut)}>
          <LogoutIcon className={style.icon} />
          <li>Log out</li>
        </Link>
      </ul>
    </div>
  );
};

SetupHeader.propTypes = {
  itemsHrefs: PropTypes.shape({
    seeMyPlatform: PropTypes.string,
    logOut: PropTypes.string,
    globalAnalytics: PropTypes.string,
    platformList: PropTypes.string
  }),
  platformName: PropTypes.string,
  isHome: PropTypes.bool,
  href: Link.propTypes.href,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string
  }),
  logo: Picture.propTypes.src,
  logoMobile: Picture.propTypes.src
};

export default SetupHeader;
