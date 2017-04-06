import React from 'react';

const SubscriptionPremiumDetails = props => (
  <div>
    <img
      src={props.checkImage}
    />
    <div>
      {props.translations.subscriptionPremiumTitle}
    </div>
    <div>
      {props.translations.subscriptionPremiumDescriptionPart1}
      {props.subscriptionPremiumDescriptionDate}
      {props.translations.subscriptionPremiumDescriptionPart2}
      {props.subscriptionPremiumDescriptionPrice}
      {props.translations.subscriptionPremiumDescriptionPart2End}
    </div>
    <div>
      {props.translations.subscriptionPremiumDescriptionPart3}
      <a href={`${props.subscriptionPremiumDescriptionLink}`}>
        {props.translations.subscriptionPremiumDescriptionPart3WithLink}
      </a>
    </div>
  </div>
);

export default SubscriptionPremiumDetails;
