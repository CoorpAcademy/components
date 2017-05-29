import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const CatalogSection = ({title, children}, context) => (
  <div className={style.details}>
    <div className={style.title}>
      {title}
    </div>
    {children}
  </div>
);

CatalogSection.contextTypes = {};

CatalogSection.propTypes = {
  title: PropTypes.string
};

export default CatalogSection;
