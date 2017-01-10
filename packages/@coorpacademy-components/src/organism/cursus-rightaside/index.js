import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import * as CustomPropTypes from '../../util/proptypes';
import CatalogCTA from '../../molecule/catalog-cta';
import Picture from '../../atom/picture';
import style from './style.css';

const CursusRightaside = (props, context) => {
  const {translate = identity} = context;
  const certificationLabel = translate('certification');
  const assetsLabel = translate('assets');
  const {rating, maxRating, linkBuy, linkTry, badge, assets = []} = props;

  const assetsView = assets.map((asset, index) => (
    <li
      key={index}
      className={style.asset}
    >
      {asset}
    </li>
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

CursusRightaside.contextTypes = {
  translate: React.PropTypes.func
};

CursusRightaside.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  linkBuy: PropTypes.string,
  linkTry: PropTypes.string,
  assets: PropTypes.array,
  badge: CustomPropTypes.url
};
export default CursusRightaside;
