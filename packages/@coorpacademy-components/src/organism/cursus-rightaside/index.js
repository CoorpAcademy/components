import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import createCatalogCTA from '../../molecule/catalog-cta';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkBuy: checker.string.optional,
    linkTry: checker.string.optional,
    assets: checker.array.optional,
    badge: checker.url.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;
  const CatalogCTA = createCatalogCTA(treant, options);
  const Picture = createPicture(treant, options);

  const certificationLabel = translate('certification');
  const assetsLabel = translate('assets');

  const CursusRightaside = (props, children) => {
    const {rating, maxRating, linkBuy, linkTry, badge, assets = []} = props;

    const assetsView = assets.map(asset => (
      <li className={style.asset}>{asset}</li>
    ));

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
            {certificationLabel}
          </div>
          <Picture
            src={badge}
          />
        </div>

        <div className={style.colDetails}>
          <div className={style.detailTitle}>
            {assetsLabel}
          </div>
          <ul className={style.assets}>
            {assetsView}
          </ul>
        </div>
      </div>
    );
  };

  CursusRightaside.validate = createValidate(conditions);
  return CursusRightaside;
};
