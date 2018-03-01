import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import MenuList from '../../molecule/menu-list';
import style from './style.css';

const SetupHeader = props => {
  const {menuItems, href, user = {}, logo, logoMobile} = props;

  const {username = '', image = ''} = user;

  return (
    <div className={style.wrapper}>
      <div className={style.user}>
        <div className={style.avatar}>
          <img src={image} />
        </div>
        <div className={style.username}>{username}</div>
      </div>
      <div className={style.logo}>
        <Link href={href}>
          <Picture className={style.logoDesktop} src={logo} />
          <Picture className={style.logoMobile} src={logoMobile} />
        </Link>
      </div>
      <div className={style.logout}>
        <MenuList menuItems={menuItems} />
      </div>
    </div>
  );
};

SetupHeader.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ),
  href: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string
  }),
  logo: PropTypes.string,
  logoMobile: PropTypes.string
};

export default SetupHeader;
