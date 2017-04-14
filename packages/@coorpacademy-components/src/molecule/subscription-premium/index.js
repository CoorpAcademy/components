import React, {PropTypes} from 'react';
import style from './style.css';

const SubscriptionPremiumDetails = props => (
  <div className={style.premium}>
    <div className={style.premiumTitle}>
      <img
        className={style.premiumTitleImage}
        src={props.checkImage}
      />
      <div className={style.premiumTitleText}>
        {props.translations.subscriptionPremiumTitle}
      </div>
    </div>
    <div className={style.premiumProductDetails}>
      {props.translations.subscriptionPremiumDescriptionPart1}
      {props.subscriptionPremiumDescriptionDate}
      {props.translations.subscriptionPremiumDescriptionPart2}
      {props.subscriptionPremiumDescriptionPrice}
      {props.translations.subscriptionPremiumDescriptionPart2End}
    </div>
    <div className={style.cancelSubscriptionText}>
      {props.translations.subscriptionPremiumDescriptionPart3}
      <a
        className={style.cancelSubscriptionLink}
        href={`${props.subscriptionPremiumDescriptionLink}`}
      >
        {props.translations.subscriptionPremiumDescriptionPart3WithLink}
      </a>
    </div>
  </div>
);

SubscriptionPremiumDetails.PropTypes = {
  checkImage: PropTypes.string,
  subscriptionPremiumDescriptionDate: PropTypes.string,
  subscriptionPremiumDescriptionPrice: PropTypes.string,
  subscriptionPremiumDescriptionLink: PropTypes.string,
  cancelSubscriptionText: PropTypes.string
};

export default SubscriptionPremiumDetails;
