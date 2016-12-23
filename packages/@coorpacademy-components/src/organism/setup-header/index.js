import React, {PropTypes} from 'react';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import style from './style.css';

const SetupHeader = props => {
  const {
    logout,
    logoutValue,
    href,
    user = {},
    logo,
    logoMobile
  } = props;

  const {
    username = '',
    image = ''
  } = user;

  return (
    <div className={style.wrapper}>
      <div className={style.user}>
        <div className={style.avatar}>
          <img src={image} />
        </div>
        <div className={style.username}>
          {username}
        </div>
      </div>
      <div className={style.logo}>
        <Link href={href}>
          <Picture className={style.logoDesktop} src={logo} />
          <Picture className={style.logoMobile} src={logoMobile} />
        </Link>
      </div>
      <div className={style.logout}>
        <Link href={logout}>
          {logoutValue}
        </Link>
      </div>
    </div>
  );
};

SetupHeader.propTypes = {
  logout: PropTypes.string,
  logoutValue: PropTypes.string,
  href: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string
  }),
  logo: PropTypes.string,
  logoMobile: PropTypes.string
};

export default SetupHeader;
