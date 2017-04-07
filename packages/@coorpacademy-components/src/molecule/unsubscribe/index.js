import React from 'react';
import style from './style.css';

const navigateToMooc = url => {
  window.location.href = url;
};

const Unsubscribe = props => {
  const handleKeepSubscriptionButtonClick = () => navigateToMooc(props.moocUrl);
  return (
    <div className={style.unsubscribe}>
      <div className={style.description}>
        {props.translations.confirmUnsubscribe}
      </div>
      <div className={style.buttonContainer}>
        <button className={`${style.blueButton} ${style.button}`} onClick={handleKeepSubscriptionButtonClick}>
          {props.translations.keepSubscription}
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button className={`${style.whiteButton} ${style.button}`} onClick={props.handleUnsubscribeButtonClick}>
          {props.translations.unsubscribe}
        </button>
      </div>
    </div>
  );
};

export default Unsubscribe;
