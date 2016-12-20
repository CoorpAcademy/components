import React from 'react';
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

class Catalog extends React.Component {
  render() {
    const {translate} = this.context;
    const {
      categories, 
      products = null, 
      cursuses
    } = this.props;
    
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
  }
};

Catalog.contextTypes = {
  translate: React.PropTypes.function
};

Catalog.validate = createValidate(conditions);
export default Catalog;
