export default {
  props: {
    navigateToMooc: () => {
      console.log('navigates to MOOC');
    },
    hasUnsubscribed: true,
    onUnsubscribeButtonClick: () => {
      console.log('unsubscribes');
    }
  }
};
