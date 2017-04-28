import React, {PropTypes} from 'react';
import style from './style.css';

const SubscriptionPremiumDetails = (props, context) => {
  const { translate } = context;

  return (
    <div>
      <div className={style.premiumTitle}>
        <img
          className={style.premiumTitleImage}
          src={props.checkImage}
        />
        <div className={style.premiumTitleText}>
          {translate('subscription_premium_title')}
        </div>
      </div>
      <div className={style.premiumProductDetails}>
        {translate('subscription_premium_description_part1')}
        {props.subscriptionPremiumDescriptionDate}
        {translate('subscription_premium_description_part2')}
        {props.subscriptionPremiumDescriptionPrice}
        {translate('subscription_premium_description_part2_end')}
      </div>
      <div className={style.cancelSubscriptionText}>
        {translate('subscription_premium_description_part3')}
        <a
          className={style.cancelSubscriptionLink}
          href={`${props.subscriptionPremiumDescriptionLink}`}
        >
          {translate('subscription_premium_description_part3_with_link')}
        </a>
      </div>
    </div>
  );
};

SubscriptionPremiumDetails.contextTypes = {
  translate: PropTypes.func
};

SubscriptionPremiumDetails.propTypes = {
  checkImage: PropTypes.string,
  subscriptionPremiumDescriptionDate: PropTypes.string,
  subscriptionPremiumDescriptionPrice: PropTypes.string,
  subscriptionPremiumDescriptionLink: PropTypes.string
};

export default SubscriptionPremiumDetails;
