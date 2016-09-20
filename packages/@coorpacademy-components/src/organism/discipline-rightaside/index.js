import {checker, createValidate} from '../../util/validation';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import style from './style.css';
import createCatalogCTA from '../../molecule/catalog-cta';
import createImage from '../../atom/image';

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

const icons = {
  mail: '0xe902',
  'google-plus': '0xe903',
  facebook: '0xe904',
  twitter: '0xe905',
  linkedin: '0xe906',
  instagram: '0xe907',
  youtube: '0xe908',
  vimeo: '0xe909',
  pinterest: '0xe910'
};

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const CatalogCTA = createCatalogCTA(treant, options);
  const Image = createImage(treant, options);

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const authorLabel = t('author');

  const DisciplineRightaside = (props, children) => {
    const {rating, maxRating, linkBuy, linkTry, author} = props;
    const socialLinks = get('socialLinks', author);
    const authorLogo = get('logo', author);

    const socialView = map(social => (
      <a
        href={social.link}
        className={style.link}
        target={'_blank'}
      >{String.fromCharCode(icons[social.ref])}
      </a>
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
        <div className={authorLogo ? style.colDetails : style.hide}>
          <div className={style.detailTitle}>
            {authorLabel}
          </div>
          <div className={style.logoContainer}>
            <Image
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
