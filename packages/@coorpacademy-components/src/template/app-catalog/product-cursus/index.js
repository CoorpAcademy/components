import React from 'react';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../../util/validation';
import CursusHeader from '../../../molecule/cursus-header';
import CursusRightaside from '../../../organism/cursus-rightaside';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    description: checker.string.optional,
    image: checker.url.optional,
    badge: checker.url.optional,
    linkBuy: checker.string.optional,
    linkTry: checker.string.optional,
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    assets: checker.arrayOf(checker.string).optional,
    disciplines: checker.oneOfType([checker.arrayOf(checker.object), checker.null]).optional
  }),
  children: checker.none
});

class ProductCursus extends React.Component {
  render() {
    const {translate} = this.context;
    const cardsTitle = translate('This course contains:');
    const {
      disciplines = null,
      maxRating,
      image,
      badge,
      title = '',
      description = '',
      rating = 0,
      assets,
      linkBuy,
      linkTry
    } = this.props;

    return (
      <div className={layout.wrapper}>
        <div className={layout.container}>
          <CursusHeader
            image={image}
            title={title}
            description={description}
          />
        </div>
        <div className={layout.colContainer}>
          <CursusRightaside
            badge={badge}
            assets={assets || []}
            rating={rating}
            maxRating={maxRating}
            linkBuy={linkBuy}
            linkTry={linkTry}
          />
        </div>
        <div className={style.productsContainer}>
          <span className={layout.cardsTitle}>
            {cardsTitle}
          </span>

          <div className={style.productsWrapper}>
            <CatalogCards
              products={disciplines}
            />
          </div>
        </div>
      </div>
    );
  }
};

ProductCursus.contextTypes = {
  translate: React.PropTypes.function
};

ProductCursus.validate = createValidate(conditions);
export default ProductCursus;
