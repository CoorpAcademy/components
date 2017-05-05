export default {
  props: {
    navigateToMooc: () => {
      console.log('navigates to MOOC'); // eslint-disable-line no-console
    },
    hasUnsubscribed: true,
    onUnsubscribeButtonClick: () => {
      console.log('unsubscribes'); // eslint-disable-line no-console
    }
  }
};
