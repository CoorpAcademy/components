import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import classNames from 'classnames';

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

  const platformListButtonProps = {
    type: 'tertiary',
    label: items.platformList.label,
    'aria-label': items.platformList.label,
    'data-name': `platform-list-button`,
    link: {
      href: items.platformList.href
    },
    icon: {
      position: 'left',
      type: 'list'
    }
  };

  const platformListIconButtonProps = {
    type: 'secondary',
    'aria-label': items.platformList.label,
    'data-name': `platform-list-button`,
    link: {
      href: items.platformList.href
    },
    icon: {
      position: 'center',
      type: 'list'
    }
  };

  const goAnalyticsButtonProps = {
    type: 'secondary',
    label: items.globalAnalytics.label,
    'aria-label': items.globalAnalytics.label,
    'data-name': `platform-list-button`,
    link: {
      href: items.globalAnalytics.href
    },
    icon: {
      position: 'left',
      type: 'analytics'
    }
  };

  const myPlatformButtonProps = {
    type: 'primary',
    label: items.platformList.label,
    'aria-label': items.platformList.label,
    'data-name': `platform-list-button`,
    link: {
      href
    },
    icon: {
      position: 'left',
      type: 'see'
    }
  };

  const logoutButtonProps = {
    type: 'text',
    label: items.logOut.label,
    'aria-label': items.logOut.label,
    'data-name': `logout-list-button`,
    link: {
      href: items.logOut.href
    },
    icon: {
      position: 'left',
      type: 'logout'
    }
  };
  return (
    <div className={style.container}>
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
            <div className={classNames([style.button, style.platformList])}>
              <ButtonLink {...platformListButtonProps} />
            </div>
            <div className={style.platformListIcon}>
              <ButtonLink {...platformListIconButtonProps} />
            </div>
            {!isDashboard ? (
              <li className={classnames(style.element, style.platformName)}>{platformName}</li>
            ) : null}
          </ul>
        )}
        <ul className={style.list}>
          {items.globalAnalytics && isDashboard === false ? (
            <div className={style.button}>
              <ButtonLink {...goAnalyticsButtonProps} />
            </div>
          ) : null}
          {isHome || isDashboard ? null : (
            <div className={style.button}>
              <ButtonLink {...myPlatformButtonProps} />
            </div>
          )}
          <li onMouseEnter={onMouseEnter} className={style.profilePicture}>
            <img src={image} />
          </li>
          <div className={style.logOut}>
            <ButtonLink {...logoutButtonProps} />
          </div>
        </ul>
      </div>
      <div data-name={`logout-${show ? 'show' : 'hide'}`}>
        <div className={style.arrowUp} />
        <div className={style.logOut} onMouseLeave={onMouseLeave}>
          <ButtonLink {...logoutButtonProps} />
        </div>
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
