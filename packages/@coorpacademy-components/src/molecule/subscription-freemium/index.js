import React, {PropTypes} from 'react';
import style from './style.css';

const SubscriptionFreemiumDetails = (props, context) => {
  const { translate } = context;

  return (
    <div className={style.subscriptionFreemium}>
      <div className={style.subscriptionFreemiumTitle}>
        {translate(props.subscriptionFreemiumTitle)}
      </div>
      <div className={style.subscriptionFreemiumContent}>
        {translate(props.subscriptionFreemiumDescription)}
      </div>
      <button
        className={style.subscriptionFreemiumButton}
        onClick={props.onSubscriptionFreemiumButtonClick}
      >
        {translate(props.subscriptionFreemiumButton)}
      </button>
    </div>
  );
};

SubscriptionFreemiumDetails.contextTypes = {
  translate: PropTypes.func
};

SubscriptionFreemiumDetails.propTypes = {
  onSubscriptionFreemiumButtonClick: PropTypes.func,
  subscriptionFreemiumTitle: PropTypes.string,
  subscriptionFreemiumDescription: PropTypes.string,
  subscriptionFreemiumButton: PropTypes.string
};

export default SubscriptionFreemiumDetails;
