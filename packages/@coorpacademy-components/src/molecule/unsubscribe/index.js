import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './style.css';

const Unsubscribe = (props, context) => {
  const {translate} = context;
  const {moocUrl} = props;

  return (
    <div>
      {!props.hasUnsubscribed &&
        <div className={style.unsubscribe}>
          <div className={style.description}>
            {translate('confirm_unsubscribe')}
          </div>
          <div className={style.buttonContainer}>
            <Link className={style.keepSubscriptionButton} href={moocUrl}>
              {translate('keep_subscription')}
            </Link>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.unsubscribeButton} onClick={props.onUnsubscribeButtonClick}>
              {translate('unsubscribe')}
            </button>
          </div>
        </div>}
      {props.hasUnsubscribed &&
        <div className={style.unsubscribeConfirmation}>
          {translate('premium_unsubscribe_confirmation')}
        </div>}
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
