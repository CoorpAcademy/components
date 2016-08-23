import style from './style.css';

export default ({h}, options = {}) => {
  const Catalog = ({title, categories, products}, children) => (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.catalogWrapper}>
        <div className={style.categoriesWrapper}>
          {categories}
        </div>
        <div className={style.productsWrapper}>
          {products}
        </div>
      </div>
    </div>
  );

  return Catalog;
};
