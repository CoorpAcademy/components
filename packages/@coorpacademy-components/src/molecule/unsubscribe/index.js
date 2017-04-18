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
            {translate(props.confirmUnsubscribe)}
          </div>
          <div className={style.buttonContainer}>
            <button
              className={`${style.blueButton} ${style.button}`}
              onClick={handleKeepSubscriptionButtonClick}
            >
              {translate(props.keepSubscription)}
            </button>
          </div>
          <div className={style.buttonContainer}>
            <button
              className={`${style.whiteButton} ${style.button}`}
              onClick={props.onUnsubscribeButtonClick}
            >
              {translate(props.unsubscribe)}
            </button>
          </div>
        </div>
      }
      { props.hasUnsubscribed &&
        <div className={style.unsubscribeConfirmation}>
          {translate(props.unsubscribeConfirmation)}
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
  confirmUnsubscribe: PropTypes.string,
  keepSubscription: PropTypes.string,
  onUnsubscribeButtonClick: PropTypes.func,
  unsubscribe: PropTypes.string,
  unsubscribeConfirmation: PropTypes.string
};

export default Unsubscribe;
