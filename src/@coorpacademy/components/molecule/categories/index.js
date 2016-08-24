import { checker, createValidate } from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    categories: checker.array
  }),
  children: checker.none
});

export default ({h}, options = {}) => {
  const Categories = ({categories}, children) => {
    const CategoriesDiv = categories.map(category => (
      <li className={style.filter}>
        <a href={category.href}>{category.name}</a>
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
        <div className={style.category}>
          <h2>Filtres</h2>
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
