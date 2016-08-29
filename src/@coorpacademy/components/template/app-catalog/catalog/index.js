import { checker, createValidate } from '../../../util/validation';
import style from './style.css';
<<<<<<< 4b911a13bfbaebbb78bff3c589e9a88701b31232:src/@coorpacademy/components/template/app-catalog/catalog/index.js
import createCategories from '../../../molecule/categories';
import createCatalogCards from '../../../organism/catalog-cards';
=======
import createSpinner from '../../atom/spinner';
import createCategories from '../../molecule/categories';
import createCatalogueCards from '../../organism/catalogue-cards';
>>>>>>> Adds catalog's loading and empty states:src/@coorpacademy/components/template/catalog/index.js

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
  const CatalogCards = createCatalogCards(treant, options);

  const Catalog = ({title, categories, products}, children) => (
    <div className={style.wrapper}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.catalogWrapper}>
        <div className={style.categoriesWrapper}>
          <Categories
            categories={categories}
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
