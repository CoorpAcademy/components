import React from 'react';
import style from './style.css';

const SubscriptionFreemiumDetails = props => (
  <div className={style.subscriptionFreemium}>
    <div className={style.subscriptionFreemiumTitle}>
      {props.translations.subscriptionFreemiumTitle}
    </div>
    <div className={style.subscriptionFreemiumContent}>
      {props.translations.subscriptionFreemiumDescription}
    </div>
    <button
      className={style.subscriptionFreemiumButton}
      onClick={props.onSubscriptionFreemiumButtonClick}
    >
      {props.translations.subscriptionFreemiumButton}
    </button>
  </div>
);

export default SubscriptionFreemiumDetails;
