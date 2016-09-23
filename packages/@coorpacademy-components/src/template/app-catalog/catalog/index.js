import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import createCategories from '../../../molecule/categories';
import createCursusList from '../../../molecule/cursus-list';
import createCatalogCards from '../../../organism/catalog-cards';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.oneOfType([checker.arrayOf(checker.object), checker.null]).optional,
    categories: checker.arrayOf(checker.object),
    cursuses: checker.arrayOf(checker.object).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const Categories = createCategories(treant, options);
  const CursusList = createCursusList(treant, options);
  const CatalogCards = createCatalogCards(treant, options);

  const Catalog = ({categories, products = null, cursuses}, children) => (
    <div className={style.wrapper}>
      <h1 className={style.title}>{translate('Catalog')}</h1>
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
