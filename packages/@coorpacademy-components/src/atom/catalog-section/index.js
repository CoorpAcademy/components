import React, {PropTypes} from 'react';
import style from './style.css';

const CatalogSection = ({title, children}, context) => (
  <div className={style.details}>
    <div className={style.title}>
      {title}
    </div>
    {children}
  </div>
);

CatalogSection.contextTypes = {
};

CatalogSection.propTypes = {
};

export default CatalogSection;
