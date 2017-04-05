import React from 'react';

const SubscriptionFreemiumDetails = props => (
  <div>
    <div>
      {props.translations.subscriptionFreemiumTitle}
    </div>
    <div>
      {props.translations.subscriptionFreemiumDescription}
    </div>
    <button onClick={props.handleSubscriptionFreemiumButton}>
      {props.translations.subscriptionFreemiumButton}
    </button>
  </div>
);

export default SubscriptionFreemiumDetails;
