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
    tabTitle: 'subscription_and_payment'
  }
};
