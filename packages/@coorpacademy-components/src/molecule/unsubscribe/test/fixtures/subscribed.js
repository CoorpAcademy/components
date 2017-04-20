export default {
  props: {
    navigateToMooc: () => {console.log('navigates to MOOC');}, // eslint-disable-line no-console
    hasUnsubscribed: false,
    confirmUnsubscribe: 'confirm_unsubscribe',
    keepSubscription: 'keep_subscription',
    onUnsubscribeButtonClick: () => {console.log('unsubscribes');}, // eslint-disable-line no-console
    unsubscribe: 'unsubscribe',
    unsubscribeConfirmation: 'premium_unsubscribe_confirmation'
  }
};
