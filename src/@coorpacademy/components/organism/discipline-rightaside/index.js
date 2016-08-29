import {checker, createValidate} from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './discipline-rightaside.css';
import hyperx from 'hyperx';
import createStarRating from '../../molecule/star-rating';
import createCatalogCTA from '../../molecule/catalog-cta';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    linkBuy: checker.string,
    author: checker.string
  }),
  children: checker.none
});

const getOrBlank = getOr('');

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const CatalogCTA = createCatalogCTA(treant, options);

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const authorLabel = t('author');

  const DisciplineRightaside = (props, children) => {
    const {rating, maxRating, linkBuy, author} = props;

    return (
      <div className={style.col}>
        <CatalogCTA
          rating={rating}
          maxRating={maxRating}
          linkBuy={linkBuy}
        />
        <div className={style.colDetails}>
          <div className={style.detailTitle}>
            {authorLabel}
          </div>
          <div className={style.title}>
            {author}
          </div>
        </div>
      </div>
    );
  };

  DisciplineRightaside.validate = createValidate(conditions);
  return DisciplineRightaside;
};
