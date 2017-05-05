import React from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';
import Picture from '../../atom/picture';
import CatalogSection from '../../atom/catalog-section';
import style from './style.css';

const CatalogBadge = (props, context) => {
  const {badge} = props;

  if (isNil(badge)) return null;

  const {translate} = context;

  const title = translate('certification');

  return (
    <CatalogSection title={title}>
      <Picture className={style.badge} src={badge} />
    </CatalogSection>
  );
};

CatalogBadge.contextTypes = {
  translate: PropTypes.func
};

CatalogBadge.propTypes = {
  badge: Picture.propTypes.src
};
export default CatalogBadge;
