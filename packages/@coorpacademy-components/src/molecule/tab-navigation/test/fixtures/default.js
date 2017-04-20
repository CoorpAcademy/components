export default {
  props: {
    tabs: [
      {
        title: 'my_subscription_title',
        key: 'subscribe',
        targetContent: 'subscribe',
        links: [
          {
            title: 'my_subscription_manage_freemium_title'
          }
        ]
      }
    ],
    onTabClick: () => {},
    onBackToCatalogButtonClick: () => {},
    activeContent: 'subscribe',
    titles: {
      subscribe: 'subscription_and_payment'
    },
    subscriptionFreemiumTitle: 'subscription_freemium_title',
    subscriptionFreemiumDescription: 'subscription_freemium_description',
    subscriptionFreemiumButton: 'subscription_freemium_button'
  }
};
