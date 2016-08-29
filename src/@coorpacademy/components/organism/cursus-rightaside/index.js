import { checker, createValidate } from '../../util/validation';
import getOr from 'lodash/fp/getOr';
import style from './cursus-rightaside.css';
import layout from '../discipline-rightaside/discipline-rightaside.css';
import createCatalogCTA from '../../molecule/catalog-cta';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number,
    maxRating: checker.number,
    linkBuy: checker.string,
    assets: checker.array,
    badge: checker.url
  }),
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
    const {rating, maxRating, linkBuy, badge, assets} = props;

    const assetsView = assets.map(asset => (
      <li className={style.asset}>{asset}</li>
    ));

    return (
      <div className={layout.col}>
        <CatalogCTA
          rating={rating}
          maxRating={maxRating}
          linkBuy={linkBuy}
        >
        </CatalogCTA>

        <div className={layout.colDetails}>
          <div className={layout.detailTitle}>
            {certificationLabel}
          </div>
          <img
            src={badge}
          />

          <div className={layout.detailTitle}>
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
