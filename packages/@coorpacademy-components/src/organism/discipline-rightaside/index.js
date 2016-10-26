import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import createCatalogCTA from '../../molecule/catalog-cta';
import createPicture from '../../atom/picture';
import createSocialLink from '../../atom/social-link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkBuy: checker.string.optional,
    linkTry: checker.string.optional,
    author: checker.shape({
      name: checker.string.optional,
      socialLinks: checker.array.optional
    }).optional,
    authorTitle: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const CatalogCTA = createCatalogCTA(treant, options);
  const Picture = createPicture(treant, options);
  const SocialLink = createSocialLink(treant, options);

  const DisciplineRightaside = (props, children) => {
    const {rating, maxRating, linkBuy, linkTry, author, authorTitle} = props;
    const socialLinks = get('socialLinks', author);
    const authorLogo = get('logo', author);

    const authorLabel = authorTitle || translate('author');

    const socialView = map(social => (
      <div className={style.link}>
        <SocialLink {...social} />
      </div>
    ), socialLinks);

    const ctaView = (
      <div className={style.ctaWrapper}>
        <CatalogCTA
          rating={rating}
          maxRating={maxRating}
          linkBuy={linkBuy}
          linkTry={linkTry}
        />
      </div>
    );

    return (
      <div className={style.col}>
        {(rating && linkBuy && linkTry) ? ctaView : null}
        <div className={authorLogo ? style.colDetails : style.hide}>
          <div className={style.detailTitle}>
            {authorLabel}
          </div>
          <div className={style.logoContainer}>
            <Picture
              className={style.logo}
              src={authorLogo}
            />
          </div>
          <div className={style.links}>
            {socialView}
          </div>
        </div>
      </div>
    );
  };

  DisciplineRightaside.validate = createValidate(conditions);
  return DisciplineRightaside;
};
