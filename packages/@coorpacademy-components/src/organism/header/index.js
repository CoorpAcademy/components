import React, {PropTypes} from 'react';
import * as CustomPropTypes from '../../util/proptypes';
import Picture from '../../atom/picture';
import MenuList from '../../molecule/menu-list';
import style from './style.css';

const Header = props => {
  const {menuItems, src, href} = props;

  return (
    <div className={style.static}>
      <div className={style.logo}>
        <a href={href}>
          <Picture src={src} />
        </a>
      </div>
      <div className={style.navigation}>
        <MenuList menuItems={menuItems} />
      </div>
    </div>
  );
};

Header.propTypes = {
  href: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string
    })
  ),
  src: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.objectOf(CustomPropTypes.url).isRequired
  ])
};

export default Header;
