export default {
  props: {
    navigateToMooc: () => {
      console.log('navigates to MOOC');
    },
    hasUnsubscribed: false,
    onUnsubscribeButtonClick: () => {
      console.log('unsubscribes');
    }
  }
};
