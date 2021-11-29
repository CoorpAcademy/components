import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../list-item';
import Title from '../../atom/title';

import ButtonLink from '../../atom/button-link';
import style from './style.css';

const ListItems = ({title, buttonLink, items, 'aria-label': ariaLabel}) => {
  const itemsView = items.map(item => (
    <li key={item.id} className={style.item}>
      <ListItem {...item} />
    </li>
  ));

  return (
    <div>
      <div className={style.header}>
        <div className={style.title}>
          <Title title={title} type={'form-group'} />
        </div>
        <div className={style.buttonCreate}>
          <ButtonLink {...buttonLink} />
        </div>
      </div>
      <ul className={style.list} aria-label={ariaLabel}>
        {itemsView}
      </ul>
    </div>
  );
};

ListItems.propTypes = {
  'aria-label': PropTypes.string,
  buttonLink: PropTypes.shape(ButtonLink.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  title: PropTypes.string
};

export default ListItems;
