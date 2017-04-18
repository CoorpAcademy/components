import React, {PropTypes} from 'react';
import style from './style.css';

const SubscriptionPremiumDetails = (props, context) => {
  const { translate } = context;

  return (
    <div className={style.premium}>
      <div className={style.premiumTitle}>
        <img
          className={style.premiumTitleImage}
          src={props.checkImage}
        />
        <div className={style.premiumTitleText}>
          {translate(props.subscriptionPremiumTitle)}
        </div>
      </div>
      <div className={style.premiumProductDetails}>
        {translate(props.subscriptionPremiumDescriptionPart1)}
        {props.subscriptionPremiumDescriptionDate}
        {translate(props.subscriptionPremiumDescriptionPart2)}
        {props.subscriptionPremiumDescriptionPrice}
        {translate(props.subscriptionPremiumDescriptionPart2End)}
      </div>
      <div className={style.cancelSubscriptionText}>
        {translate(props.subscriptionPremiumDescriptionPart3)}
        <a
          className={style.cancelSubscriptionLink}
          href={`${props.subscriptionPremiumDescriptionLink}`}
        >
          {translate(props.subscriptionPremiumDescriptionPart3WithLink)}
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
  subscriptionPremiumDescriptionLink: PropTypes.string,
  subscriptionPremiumTitle: PropTypes.string,
  subscriptionPremiumDescriptionPart1: PropTypes.string,
  subscriptionPremiumDescriptionPart2: PropTypes.string,
  subscriptionPremiumDescriptionPart2End: PropTypes.string,
  subscriptionPremiumDescriptionPart3: PropTypes.string,
  subscriptionPremiumDescriptionPart3WithLink: PropTypes.string
};

export default SubscriptionPremiumDetails;
