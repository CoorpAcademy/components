import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import style from './style.css';

const PremiumDescription = ({date, price}, {translate}) => {
  // @TODO use only one template
  const part1 = translate('subscription_premium_description_part1');
  const part2 = translate('subscription_premium_description_part2');

  return (
    <div className={style.premiumProductDetails}>
      {`${part1}${date}${part2}${price}.`}
    </div>
  );
};

PremiumDescription.contextTypes = {
  translate: Provider.childContextTypes.translate
};

PremiumDescription.propTypes = {
  date: PropTypes.string,
  price: PropTypes.string
};

const PromoCodeDescription = ({date}, {translate}) => {
  const text = translate('subscription_promo_code', {date});

  return (
    <div className={style.premiumProductDetails}>
      {text}
      <a className={style.homeLink} href="http://coorpacademy.com">Coorpacademy.com</a>
    </div>
  );
};

PromoCodeDescription.propTypes = {
  date: PropTypes.string
};

PromoCodeDescription.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const SubscriptionPremiumDetails = (props, context) => {
  const {
    isPromoCode,
    subscriptionPremiumDescriptionDate: date,
    subscriptionPremiumDescriptionPrice: price
  } = props;

  const {translate} = context;
  const Description = isPromoCode ? PromoCodeDescription : PremiumDescription;

  return (
    <div>
      <div className={style.premiumTitle}>
        <img className={style.premiumTitleImage} src={props.checkImage} />
        <div className={style.premiumTitleText}>
          {translate('subscription_premium_title')}
        </div>
      </div>
      <div>
        <Description date={date} price={price} />
        {!isPromoCode
          ? <div className={style.cancelSubscriptionText}>
              {translate('subscription_premium_description_part3')}
              <a
                className={style.cancelSubscriptionLink}
                href={`${props.subscriptionPremiumDescriptionLink}`}
              >
                {translate('subscription_premium_description_part3_with_link')}
              </a>
            </div>
          : null}
      </div>
    </div>
  );
};

SubscriptionPremiumDetails.contextTypes = {
  translate: Provider.childContextTypes.translate
};

SubscriptionPremiumDetails.propTypes = {
  checkImage: PropTypes.string,
  subscriptionPremiumDescriptionDate: PropTypes.string,
  subscriptionPremiumDescriptionPrice: PropTypes.string,
  subscriptionPremiumDescriptionLink: PropTypes.string
};

export default SubscriptionPremiumDetails;
