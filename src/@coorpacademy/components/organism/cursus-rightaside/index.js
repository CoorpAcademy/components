import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './cursus-rightaside.css';
import createCatalogCTA from '../../molecule/catalog-cta';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    linkBuy: checker.string
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const CatalogCTA = createCatalogCTA(treant, options);

  const CursusRightaside = (props, children) => {
    const {rating, maxRating, linkBuy} = props;

    return (
      <div className={style.col}>
        <CatalogCTA
          rating={rating}
          maxRating={maxRating}
          linkBuy={linkBuy}
        >
        </CatalogCTA>
      </div>
    );
  };

  CursusRightaside.validate = createValidate(conditions);
  return CursusRightaside;
};
