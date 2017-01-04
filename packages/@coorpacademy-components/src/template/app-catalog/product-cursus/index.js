import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import * as CustomPropTypes from '../../../util/proptypes';
import CursusHeader from '../../../molecule/cursus-header';
import CursusRightaside from '../../../organism/cursus-rightaside';
import CatalogCards from '../../../organism/catalog-cards';
import layout from '../layout.css';
import style from './style.css';

const ProductCursus = (props, context) => {
  const {translate = identity} = context;
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
  } = props;

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
};

ProductCursus.contextTypes = {
  translate: React.PropTypes.func
};

ProductCursus.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: CustomPropTypes.url,
  badge: CustomPropTypes.url,
  linkBuy: PropTypes.string,
  linkTry: PropTypes.string,
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  assets: PropTypes.arrayOf(PropTypes.string),
  disciplines: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.null
  ])
};

export default ProductCursus;
