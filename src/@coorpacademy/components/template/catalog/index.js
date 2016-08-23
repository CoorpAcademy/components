import { checker, createValidate } from '../../util/validation';
import style from './style.css';
import createCategories from '../../molecule/categories';
import createCatalogueCards from '../../organism/catalogue-cards';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.array,
    categories: checker.array
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Categories = createCategories(treant, options);
  const CatalogueCards = createCatalogueCards(treant, options);

  const Catalog = (props, children) => {
    const {
      title,
      categories,
      products,
      onClose,
      onOpen,
      status
    } = props;

    return (
        <div className={style.wrapper}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.catalogWrapper}>
            <div className={style.categoriesWrapper}>
              <Categories
                categories={categories}
                onClose = {onClose}
                onOpen = {onOpen}
                status = {status}
              />
            </div>
            <div className={style.productsWrapper}>
              <CatalogueCards
                products={products}
              />
            </div>
          </div>
        </div>
      );
  };

  Catalog.validate = createValidate(conditions);
  return Catalog;
};
