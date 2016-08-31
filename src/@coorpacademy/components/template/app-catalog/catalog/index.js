import {checker, createValidate} from '../../../util/validation';
import style from './style.css';
import createSpinner from '../../../atom/spinner';
import createCategories from '../../../molecule/categories';
import createCursusList from '../../../molecule/cursus-list';
import createCatalogCards from '../../../organism/catalog-cards';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.arrayOf(checker.object),
    categories: checker.arrayOf(checker.object)
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Spinner = createSpinner(treant, options);
  const Categories = createCategories(treant, options);
  const CursusList = createCursusList(treant, options);
  const CatalogCards = createCatalogCards(treant, options);

  const Catalog = ({title, categories, products, cursuses}, children) => (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.catalogWrapper}>
        <div className={style.categoriesWrapper}>
          <Categories
            categories={categories}
          />
          <CursusList
            cursuses={cursuses}
          />
        </div>
        <div className={style.productsWrapper}>
          <CatalogCards
            products={products}
          />
        </div>
      </div>
    </div>
  );

  Catalog.validate = createValidate(conditions);
  return Catalog;
};
