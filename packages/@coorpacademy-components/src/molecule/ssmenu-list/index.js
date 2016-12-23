import React, {PropTypes} from 'react';
import style from './style.css';

const SsMenuList = props => {
  const {items = []} = props;
  const itemsView = items.map(({title, href}, index) => (
    <li key={index} className={style.item}>
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

SsMenuList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    title: PropTypes.string
  }))
};

export default SsMenuList;
