import React from 'react';
import style from './style.css';

const navigateToMooc = url => {
  window.location.href = url;
};

const Unsubscribe = props => {
  const handleKeepSubscriptionButtonClick = () => navigateToMooc(props.moocUrl);
  return (
    <div>
      { !props.hasUnsubscribed &&
        <div className={style.unsubscribe}>
          <div className={style.description}>
            {props.translations.confirmUnsubscribe}
          </div>
          <div className={style.buttonContainer}>
            <button
              className={`${style.blueButton} ${style.button}`}
              onClick={handleKeepSubscriptionButtonClick}
            >
              {props.translations.keepSubscription}
            </button>
          </div>
          <div className={style.buttonContainer}>
            <button
              className={`${style.whiteButton} ${style.button}`}
              onClick={props.onUnsubscribeButtonClick}
            >
              {props.translations.unsubscribe}
            </button>
          </div>
        </div>
      }
      { props.hasUnsubscribed &&
        <div className={style.unsubscribeConfirmation}>
          {props.translations.unsubscribeConfirmation}
        </div>
      }
    </div>
  );
};

export default Unsubscribe;
