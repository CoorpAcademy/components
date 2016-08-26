import createLink from '../../atom/link';
import { checker, createValidate } from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    categories: checker.array
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const filtersTitle = translate ? translate('filters') : 'filters';

  const Link = createLink(treant, options);

  const Categories = ({categories = []}, children) => {
    const CategoriesDiv = categories.map(category => (
      <li className={style.filter}>
        <Link
          href={category.href}
        >
          {category.name}
        </Link>
      </li>
    ));

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
          <span>Toutes les formations</span>
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
