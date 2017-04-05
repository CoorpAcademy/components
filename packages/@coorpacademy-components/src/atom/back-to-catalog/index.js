import React from 'react';

const BackToCatalogButton = props => (
  <div onClick={props.handleBackToCatalogButtonClick}>
    {props.translations.backToCatalog}
  </div>
);

export default BackToCatalogButton;
