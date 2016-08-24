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
    const categoriesDiv = categories.map(category => {
      const filters = category.filters.map(filter => (
          <li className={style.filter}>
            <a href={filter.path}>{filter.name}</a>
          </li>
      ));

      return (
        <div className={style.category}>
          <h2>{category.title}</h2>
          <ul className={style.filters}>
            {filters}
          </ul>
        </div>
      );
    });

    return (
      <div className={style.categories}>
        <input type='checkbox' id='toggler' checked='false' className={style.mobileToggler}/>
        <label htmlFor='toggler' className={style.togglerDisplay}></label>
        {categoriesDiv}
      </div>
    );
  };

  Categories.validate = createValidate(conditions);
  return Categories;
};
