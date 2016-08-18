import style from './style.css';

export default ({h}, options = {}) => {
  const Categories = (props, children) => {
    const categories = props.categories.map(category => {
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
        {categories}
      </div>
    );
  };

  return Categories;
};
