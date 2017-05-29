import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import style from './style.css';

const SubscriptionFreemiumDetails = (props, context) => {
  const {translate} = context;

  return (
    <div className={style.subscriptionFreemium}>
      <div className={style.subscriptionFreemiumTitle}>
        {translate('subscription_freemium_title')}
      </div>
      <div className={style.subscriptionFreemiumContent}>
        {translate('subscription_freemium_description')}
      </div>
      <button
        className={style.subscriptionFreemiumButton}
        onClick={props.onSubscriptionFreemiumButtonClick}
      >
        {translate('subscription_freemium_button')}
      </button>
    </div>
  );
};

SubscriptionFreemiumDetails.contextTypes = {
  translate: Provider.childContextTypes.translate
};

SubscriptionFreemiumDetails.propTypes = {
  onSubscriptionFreemiumButtonClick: PropTypes.func
};

export default SubscriptionFreemiumDetails;
