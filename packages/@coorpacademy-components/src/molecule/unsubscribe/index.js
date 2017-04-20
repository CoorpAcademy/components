import React, {PropTypes} from 'react';
import style from './style.css';

const Unsubscribe = (props, context) => {
  const { translate } = context;
  const handleKeepSubscriptionButtonClick = props.navigateToMooc;

  return (
    <div>
      { !props.hasUnsubscribed &&
        <div className={style.unsubscribe}>
          <div className={style.description}>
            {translate('confirm_unsubscribe')}
          </div>
          <div className={style.buttonContainer}>
            <button
              className={style.blueButton}
              onClick={handleKeepSubscriptionButtonClick}
            >
              {translate('keep_subscription')}
            </button>
          </div>
          <div className={style.buttonContainer}>
            <button
              className={style.whiteButton}
              onClick={props.onUnsubscribeButtonClick}
            >
              {translate('unsubscribe')}
            </button>
          </div>
        </div>
      }
      { props.hasUnsubscribed &&
        <div className={style.unsubscribeConfirmation}>
          {translate('premium_unsubscribe_confirmation')}
        </div>
      }
    </div>
  );
};

Unsubscribe.contextTypes = {
  translate: PropTypes.func
};

Unsubscribe.propTypes = {
  navigateToMooc: PropTypes.func,
  hasUnsubscribed: PropTypes.bool,
  onUnsubscribeButtonClick: PropTypes.func
};

export default Unsubscribe;
