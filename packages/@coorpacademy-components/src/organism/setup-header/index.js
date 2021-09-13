import React from 'react';
import {
  NovaCompositionCoorpacademyTypeEye as EyeIcon,
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
  const [show, updateShow] = React.useState(false);
  const {
    platformName,
    items,
    href,
    user = {},
    logo,
    logoMobile,
    isHome = false,
    isDashboard = false
  } = props;
  const {image = ''} = user;

  function onMouseEnter() {
    updateShow(true);
  }

  function onMouseLeave() {
    updateShow(false);
  }

  return (
    <div className={style.container} onMouseLeave={onMouseLeave}>
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
              href={items.platformList.href}
              className={classnames(style.element, style.platformList)}
            >
              <ListIcon className={style.icon} />
              <li>{items.platformList.label}</li>
            </Link>
            {!isDashboard ? (
              <li className={classnames(style.element, style.platformName)}>{platformName}</li>
            ) : null}
          </ul>
        )}
        <ul className={style.list}>
          {items.globalAnalytics || isDashboard === false ? (
            <Link
              href={items.globalAnalytics.href}
              className={classnames(style.element, style.globalAnalytics)}
            >
              <AnalyticsIcon className={style.icon} />
              <li>{items.globalAnalytics.label}</li>
            </Link>
          ) : null}
          {isHome || isDashboard ? null : (
            <Link
              href={items.seeMyPlatform.href}
              className={classnames(style.element, style.seeMyPlatform)}
            >
              <EyeIcon height={20} width={28} className={style.icon} />
              <li>{items.seeMyPlatform.label}</li>
            </Link>
          )}
          <li onMouseEnter={onMouseEnter} className={style.profilePicture}>
            <img src={image} />
          </li>
          <Link href={items.logOut.href} className={classnames(style.element, style.logOut)}>
            <LogoutIcon className={style.icon} />
            <li>{items.logOut.label}</li>
          </Link>
        </ul>
      </div>

      <div data-logout={show ? 'show' : 'hide'}>
        <div className={style.arrowUp} />
        <Link href={items.logOut.href} className={classnames(style.element, style.logOut)}>
          <LogoutIcon className={style.icon} />
          <li>{items.logOut.label}</li>
        </Link>
      </div>
    </div>
  );
};

SetupHeader.propTypes = {
  items: PropTypes.shape({
    seeMyPlatform: PropTypes.shape({href: PropTypes.string, label: PropTypes.string}),
    logOut: PropTypes.shape({href: PropTypes.string, label: PropTypes.string}),
    globalAnalytics: PropTypes.shape({href: PropTypes.string, label: PropTypes.string}),
    platformList: PropTypes.shape({href: PropTypes.string, label: PropTypes.string})
  }),
  platformName: PropTypes.string,
  isDashboard: PropTypes.bool,
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
