export default {
  props: {
    tabs: [
      {
        title: 'my_subscription_title',
        key: 'my-subscription',
        targetContent: 'my-subscription',
        links: [
          {
            title: 'my_subscription_manage_freemium_title'
          }
        ]
      }
    ],
    onTabClick: () => {},
    onBackToCatalogButtonClick: () => {},
    activeContent: 'my-subscription',
    tabTitle: 'subscription_and_payment',
    subscriptionPremiumDescriptionDate: '24/04/2017',
    subscriptionPremiumDescriptionPrice: '9.90',
    checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png'
  }
};
