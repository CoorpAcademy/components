import React from 'react';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    items: checker.arrayOf(
      checker.shape({
        href: checker.string.optional,
        title: checker.string.optional
      })
    ).optional
  }),
  children: checker.none
});

const SsMenuList = ({children, ...props}) => {
  const {items = []} = props;
  const itemsView = items.map(({title, href}) => (
    <li className={style.item}>
      <a
        href={href}
      >
        {title}
      </a>
    </li>
  ));

  return (
      <ul className={style.list}>
        {itemsView}
      </ul>
  );
};

SsMenuList.validate = createValidate(conditions);
export default SsMenuList;
