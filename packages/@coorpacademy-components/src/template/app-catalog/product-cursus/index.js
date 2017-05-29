import React from 'react';
import Provider from '../../../atom/provider';
import Picture from '../../../atom/picture';
import CursusHeader from '../../../molecule/cursus-header';
import CatalogCTA from '../../../molecule/catalog-cta';
import CatalogBadge from '../../../molecule/catalog-badge';
import CatalogAssets from '../../../molecule/catalog-assets';
import CatalogCards from '../../../organism/catalog-cards';
import style from './style.css';

const ProductCursus = (props, context) => {
  const {translate} = context;
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
    <div className={style.wrapper}>
      <div className={style.header}>
        <CursusHeader image={image} title={title} description={description} />
      </div>
      <div className={style.cta}>
        <CatalogCTA rating={rating} maxRating={maxRating} linkBuy={linkBuy} linkTry={linkTry} />
      </div>
      <div className={style.details}>
        <CatalogBadge badge={badge} />
        <CatalogAssets assets={assets} />
      </div>
      <div className={style.products}>
        <div className={style.productsContainer}>
          <span className={style.cardsTitle}>
            {cardsTitle}
          </span>

          <div className={style.productsWrapper}>
            <CatalogCards products={disciplines} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCursus.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ProductCursus.propTypes = {
  title: CursusHeader.propTypes.title,
  description: CursusHeader.propTypes.description,
  image: Picture.propTypes.src,

  linkBuy: CatalogCTA.propTypes.linkBuy,
  linkTry: CatalogCTA.propTypes.linkTry,
  rating: CatalogCTA.propTypes.rating,
  maxRating: CatalogCTA.propTypes.maxRating,

  badge: CatalogBadge.propTypes.badge,

  assets: CatalogAssets.propTypes.assets,

  disciplines: CatalogCards.propTypes.products
};

export default ProductCursus;
