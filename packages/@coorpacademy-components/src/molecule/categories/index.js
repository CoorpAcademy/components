import React from 'react';
import PropTypes from 'prop-types';
import _find from 'lodash/fp/find';
import getOr from 'lodash/fp/getOr';
import Checkbox from '../../atom/checkbox';
import Link from '../../atom/link';
import style from './style.css';

const buildCategory = (category, index) => {
  const {href, selected} = category;
  const _name = getOr('', 'name', category);

  const linkProps = selected
    ? {
        className: style.selected
      }
    : {};

  return (
    <li className={style.filter} key={index}>
      <Link {...linkProps} href={href}>
        {_name}
      </Link>
    </li>
  );
};

const Categories = (props, context) => {
  const {categories = []} = props;
  const {translate} = context;
  const filtersTitle = translate('filters');

  const CategoriesDiv = categories.map(buildCategory);
  const selectedCategory = _find(
    {
      selected: true
    },
    categories
  ) || {};

  return (
    <div className={style.categories}>
      <Checkbox checked id="toggler" className={style.mobileToggler} />
      <label htmlFor="toggler" className={style.togglerDisplay}>
        <span>{getOr('', 'name', selectedCategory)}</span>
      </label>
      <span className={style.arrow} />
      <div className={style.category}>
        <h2>{filtersTitle}</h2>
        <ul className={style.filters}>
          {CategoriesDiv}
        </ul>
      </div>
    </div>
  );
};

Categories.contextTypes = {
  translate: PropTypes.func
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      selected: PropTypes.bool
    }).isRequired
  ).isRequired
};
export default Categories;
