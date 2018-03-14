import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import MenuList from '../../molecule/menu-list';
import style from './style.css';

const SetupHeader = props => {
  const {menuItems, href, user = {}, logo, logoMobile} = props;

  const {username = '', image = ''} = user;
  const displayName =
    username && username !== '' ? (
      <div data-name="header-display-name" className={style.username}>
        {username}
      </div>
    ) : null;

  return (
    <div className={style.wrapper}>
      <div className={style.user}>
        <div className={style.avatar}>
          <img src={image} />
        </div>
        {displayName}
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
  menuItems: MenuList.propTypes.menuItems,
  href: Link.propTypes.href,
  user: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string
  }),
  logo: Picture.propTypes.src,
  logoMobile: Picture.propTypes.src
};

export default SetupHeader;
