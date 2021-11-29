import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from '../list-item';
import Title from '../../atom/title';

import ButtonLink from '../../atom/button-link';
import style from './style.css';

const ListItems = ({title, buttonLink, items}) => {
  const itemsView = items.map(item => (
    <div key={item.id} className={style.item}>
      <ListItem {...item} />
    </div>
  ));

  return (
    <>
      <div className={style.header}>
        <div className={style.title}>
          <Title title={title} type={'form-group'} />
        </div>
        <div className={style.create}>
          <ButtonLink {...buttonLink} />
        </div>
      </div>
      {itemsView}
    </>
  );
};

ListItems.propTypes = {
  buttonLink: PropTypes.shape(ButtonLink.propTypes),
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)),
  title: PropTypes.string
};

export default ListItems;
