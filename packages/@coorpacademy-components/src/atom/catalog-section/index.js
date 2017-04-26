// @flow
import React, {type Children} from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export type Props = {
  children?: Children,
  title: string
};

const CatalogSection = ({title, children}: Props) => (
  <div className={style.details}>
    <div className={style.title}>
      {title}
    </div>
    {children}
  </div>
);

CatalogSection.propTypes = {
  title: PropTypes.string
};

export default CatalogSection;
