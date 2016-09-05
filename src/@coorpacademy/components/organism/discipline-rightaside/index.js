import {checker, createValidate} from '../../util/validation';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import style from './style.css';
import hyperx from 'hyperx';
import createStarRating from '../../molecule/star-rating';
import createCatalogCTA from '../../molecule/catalog-cta';
import createLink from '../../atom/link';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkBuy: checker.string.optional,
    linkTry: checker.string.optional,
    author: checker.shape({
      name: checker.string.optional,
      socialLinks: checker.array.optional
    }).optional
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
    const {rating, maxRating, linkBuy, linkTry, author} = props;
    const socialLinks = get('socialLinks', author);
    const authorName = getOr('', 'name', author);

    const socialView = map(social => (
      <a className={style.TODO}>{social.ref}{social.link}</a>
    ), socialLinks);

    return (
      <div className={style.col}>
        <div className={style.ctaWrapper}>
          <CatalogCTA
            rating={rating}
            maxRating={maxRating}
            linkBuy={linkBuy}
            linkTry={linkTry}
          />
        </div>
        <div className={style.colDetails}>
          <div className={style.detailTitle}>
            {authorLabel}
          </div>
          <div className={style.title}>
            {authorName}
          </div>
        </div>
      </div>
    );
  };

  DisciplineRightaside.validate = createValidate(conditions);
  return DisciplineRightaside;
};
