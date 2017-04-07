import React from 'react';
import style from './style.css';

const BackToCatalogButton = props => (
  <div
    className={style.backToCatalogButton}
    onClick={props.handleBackToCatalogButtonClick}
  >
    {props.translations.backToCatalogText}
  </div>
);

export default BackToCatalogButton;
