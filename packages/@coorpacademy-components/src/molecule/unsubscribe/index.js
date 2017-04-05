import React from 'react';

const navigateToMooc = url => {
    window.location.href = url;
};

const Unsubscribe = props => (
    <div>
        <div>
            {props.translations.confirmUnsubscribe}
        </div>
        <div onClick={() => navigateToMooc(props.moocUrl)}>
            {props.translations.keepSubscription}
        </div>
        <div>
            {props.translations.unsubscribe}
        </div>
    </div>
);

export default Unsubscribe;
