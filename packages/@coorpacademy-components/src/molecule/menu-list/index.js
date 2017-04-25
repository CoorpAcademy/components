import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import SsMenuList from '../ssmenu-list';
import style from './style.css';

const MenuList = props => {
  const {menuItems = []} = props;

  const MenuitemDiv = menuItems.map((item, index) => {
    const {
      title,
      href,
      type,
      subItems,
      outgoing = false
    } = item;

    const subItemsView = !isNil(subItems) && (
      <div className={style.subNav}>
        <SsMenuList
          items={item.subItems}
        />
      </div>
    );

    return (
      <li
        key={index}
        className={type ? style[type] : style.item}
      >
        <a
          href={href}
          target={outgoing ? '_blank' : '_self'}
        >
          {title}
        </a>
        {subItemsView}
      </li>
    );
  });

  return (
    <div>
      <input
        type='checkbox'
        id='toggle'
        className={style.toggleBox}
      />
      <label
        htmlFor='toggle'
        className={style.toggler}
      >
        ≡
      </label>
      <ul className={style.list}>
        {MenuitemDiv}
      </ul>
    </div>
  );
};

MenuList.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'secondary']),
    outgoing: PropTypes.bool
  }))
};

export default MenuList;
