import _find from 'lodash/fp/find';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    categories: checker.arrayOf(
      checker.shape({
        name: checker.string,
        href: checker.string.optional,
        selected: checker.bool.optional
      }).strict
    )
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const filtersTitle = translate('filters');

  const Link = createLink(treant, options);

  const Categories = ({categories = []}, children) => {
    const CategoriesDiv = categories.map(category => {
      const {href, selected} = category;
      const _name = getOr('', 'name', category);

      const linkProps = selected ? {
        className: style.selected
      } : {};

      return (
        <li className={style.filter}>
          <Link
            {...linkProps}
            href={href}
          >
            {_name}
          </Link>
        </li>
      );
    });

    const selectedCategory = _find({
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
