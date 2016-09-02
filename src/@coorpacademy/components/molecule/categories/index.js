import find from 'lodash/fp/find';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';

import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    categories: checker.array
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const filtersTitle = translate ? translate('filters') : 'filters';

  const Link = createLink(treant, options);

  const Categories = ({categories = []}, children) => {
    const CategoriesDiv = categories.map(category => {
      const {name, href, selected} = category;

      const linkProps = selected ? {
        className: style.selected
      } : {};

      return (
        <li className={style.filter}>
          <Link
            {...linkProps}
            href={href}
          >
            {name}
          </Link>
        </li>
      );
    });

    const selectedCategory = find({
      selected: true
    }, categories) || {};

    return (
      <div className={style.categories}>
        <input
          type='checkbox'
          id='toggler'
          checked='false'
          className={style.mobileToggler}
        />
        <label
          htmlFor='toggler'
          className={style.togglerDisplay}
        >
          <span>{getOr('', 'name', selectedCategory)}</span>
        </label>
        <span className={style.arrow}></span>
        <div className={style.category}>
          <h2>{filtersTitle}</h2>
          <ul className={style.filters}>
            {CategoriesDiv}
          </ul>
        </div>
      </div>
    );
  };

  Categories.validate = createValidate(conditions);
  return Categories;
};
