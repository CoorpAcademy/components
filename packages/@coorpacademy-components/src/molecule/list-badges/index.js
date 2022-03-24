import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ContentBadge from '../../atom/content-badge';
import style from './style.css';

const ListBadges = ({items, 'aria-label': ariaLabel}) => {
  const itemsView = map(({category, label}) => {
    return (
      <li
        className={style.item}
        key={`badge-${category}`}
        data-name={`badge-${category}`}
        aria-label={label}
      >
        <ContentBadge className={style.contentBadge} category={category} label={label} />
      </li>
    );
  }, items);

  return (
    <ul className={style.list} aria-label={ariaLabel} data-name="badges-list">
      {itemsView}
    </ul>
  );
};

ListBadges.propTypes = {
  'aria-label': PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(ContentBadge.propTypes))
};

export default ListBadges;
