import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './style.css';

const Unsubscribe = (props, context) => {
  const {translate} = context;
  const {moocUrl, hasUnsubscribed, onUnsubscribeButtonClick} = props;

  return (
    <div>
      {hasUnsubscribed ? null : (
        <div className={style.unsubscribe}>
          <div className={style.description}>{translate('confirm_unsubscribe')} </div>
          <div className={style.buttonContainer}>
            <Link className={style.keepSubscriptionButton} href={moocUrl}>
              {translate('keep_subscription')}
            </Link>
          </div>
          <div className={style.buttonContainer}>
            <button
              type="button"
              className={style.unsubscribeButton}
              onClick={onUnsubscribeButtonClick}
            >
              {translate('unsubscribe')}
            </button>
          </div>
        </div>
      )}
      {hasUnsubscribed ? (
        <div className={style.unsubscribeConfirmation}>
          {translate('premium_unsubscribe_confirmation')}
        </div>
      ) : null}
    </div>
  );
};

Unsubscribe.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Unsubscribe.propTypes = {
  moocUrl: PropTypes.string,
  hasUnsubscribed: PropTypes.bool,
  onUnsubscribeButtonClick: PropTypes.func
};

export default Unsubscribe;
