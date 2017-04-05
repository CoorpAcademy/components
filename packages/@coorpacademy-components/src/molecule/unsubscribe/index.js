import React from 'react';

const navigateToMooc = url => {
  window.location.href = url;
};

const Unsubscribe = props => (
  <div>
    <div>
      {props.translations.confirmUnsubscribe}
    </div>
    <button onClick={() => navigateToMooc(props.moocUrl)}>
      {props.translations.keepSubscription}
    </button>
    <button onClick={props.handleUnsubscribeButtonClick}>
      {props.translations.unsubscribe}
    </button>
  </div>
);

export default Unsubscribe;
