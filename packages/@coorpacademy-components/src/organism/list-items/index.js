import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ListItem from '../list-item';

import style from './style.css';

const ListItems = ({items}) => {
  const itemsView = items.map(item => (
    <div key={item.id} className={style.item}>
      <ListItem {...item} />
    </div>
  ));
  return itemsView;
};

ListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes))
};

export default ListItems;
