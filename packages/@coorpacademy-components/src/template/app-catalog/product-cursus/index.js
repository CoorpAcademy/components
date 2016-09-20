import { checker, createValidate } from '../../../util/validation';
import layout from '../layout.css';
import style from './style.css';

import createCursusHeader from '../../../molecule/cursus-header';
import createCursusRightaside from '../../../organism/cursus-rightaside';
import createCatalogCards from '../../../organism/catalog-cards';

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

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const CursusHeader = createCursusHeader(treant, options);
  const CursusRightaside = createCursusRightaside(treant, options);
  const CatalogCards = createCatalogCards(treant, options);
  const cardsTitle = t('This course contains:');

  const ProductCursus = (props, children) => {
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

  ProductCursus.validate = createValidate(conditions);
  return ProductCursus;
};
