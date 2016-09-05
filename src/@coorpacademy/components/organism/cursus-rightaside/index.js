import {checker, createValidate} from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './style.css';
import createCatalogCTA from '../../molecule/catalog-cta';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    linkBuy: checker.string,
    linkTry: checker.string,
    assets: checker.array,
    badge: checker.url.optional
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate} = options;
  const CatalogCTA = createCatalogCTA(treant, options);

  const t = stuff => {
    return translate ? translate(stuff) : stuff;
  };

  const certificationLabel = t('certification');
  const assetsLabel = t('assets');

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
          <img
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
