import React from 'react';

const BackToCatalogButton = props => (
  <div onClick={props.handleBackToCatalogButtonClick}>
    {props.backToCatalogButtonLabel}
  </div>
);

export default BackToCatalogButton;
