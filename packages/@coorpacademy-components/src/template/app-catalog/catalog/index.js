import React from 'react';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import Categories from '../../../molecule/categories';
import CursusList from '../../../molecule/cursus-list';
import CatalogCards from '../../../organism/catalog-cards';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    products: checker.oneOfType([checker.arrayOf(checker.object), checker.null]).optional,
    categories: checker.arrayOf(checker.object),
    cursuses: checker.arrayOf(checker.object).optional
  }),
  children: checker.none
});

const Catalog = (props, context) => {
  const {translate = identity} = context;
  const {
    categories,
    products = null,
    cursuses
  } = props;

  return (
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
};

Catalog.contextTypes = {
  translate: React.PropTypes.function
};

Catalog.validate = createValidate(conditions);
export default Catalog;
