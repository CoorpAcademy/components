import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import CatalogSection from '../../atom/catalog-section';
import Provider from '../../atom/provider';
import style from './style.css';

const CatalogAssets = (props, context) => {
  const {assets} = props;

  if (isEmpty(assets)) return null;

  const {translate} = context;

  const title = translate('assets');

  return (
    <CatalogSection title={title}>
      <ul className={style.assets}>
        {map.convert({cap: false})(
          (asset, index) => <li key={index} className={style.asset}>{asset}</li>,
          assets
        )}
      </ul>
    </CatalogSection>
  );
};

CatalogAssets.contextTypes = {
  translate: Provider.childContextTypes.translate
};

CatalogAssets.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.string)
};
export default CatalogAssets;
