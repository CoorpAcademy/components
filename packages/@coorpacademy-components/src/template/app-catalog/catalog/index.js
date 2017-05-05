import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../../../molecule/categories';
import CursusList from '../../../molecule/cursus-list';
import CatalogCards from '../../../organism/catalog-cards';
import style from './style.css';

const Catalog = (props, context) => {
  const {translate} = context;
  const {categories, products = null, cursuses} = props;

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>{translate('Catalog')}</h1>
      <div className={style.catalogWrapper}>
        <div className={style.categoriesWrapper}>
          <Categories categories={categories} />
          <CursusList cursuses={cursuses} />
        </div>
        <div className={style.productsWrapper}>
          <CatalogCards products={products} />
        </div>
      </div>
    </div>
  );
};

Catalog.contextTypes = {
  translate: PropTypes.func
};

Catalog.propTypes = {
  products: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object)]),
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cursuses: PropTypes.arrayOf(PropTypes.object)
};

export default Catalog;
