import React from 'react';
import isNil from 'lodash/fp/isNil';
import {checker, createValidate} from '../../util/validation';
import SsMenuList from '../ssmenu-list';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    menuItems: checker.arrayOf(
      checker.shape({
        href: checker.string.optional,
        title: checker.string.optional,
        type: checker.oneOf(['primary', 'secondary']).optional
      })
    ).optional
  }),
  children: checker.none
});

const MenuList = ({children, ...props}) => {
  const {menuItems = []} = props;

  const MenuitemDiv = menuItems.map(item => {
    const {title, href, type, subItems} = item;

    const subItemsView = !isNil(subItems) && (
      <div className={style.subNav}>
        <SsMenuList
          items={item.subItems}
        />
      </div>
    );

    return (
      <li className={type ? style[type] : style.item}>
        <a
          href={href}
        >
          {title}
        </a>
        {subItemsView}
      </li>
    );
  });

  return (
    <div className={style.menu}>
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

MenuList.validate = createValidate(conditions);
export default MenuList;
