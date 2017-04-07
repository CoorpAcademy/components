import React from 'react';
import style from './style.css';

const SubscriptionFreemiumDetails = props => (
  <div className="subscriptionFreemium">
    <div className="subscriptionFreemiumTitle">
      {props.translations.subscriptionFreemiumTitle}
    </div>
    <div className="subscriptionFreemiumContent">
      {props.translations.subscriptionFreemiumDescription}
    </div>
    <button
      className="subscriptionFreemiumButton"
      onClick={props.handleSubscriptionFreemiumButton}
    >
      {props.translations.subscriptionFreemiumButton}
    </button>
  </div>
);

export default SubscriptionFreemiumDetails;
