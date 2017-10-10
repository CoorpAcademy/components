export default {
  props: {
    tabs: [
      {
        title: 'Subscription title',
        key: 'my-subscription',
        targetContent: 'my-subscription',
        links: [
          {
            title: 'Premium title'
          }
        ]
      }
    ],
    onTabClick: () => {},
    onBackToCatalogButtonClick: () => {},
    activeContent: 'my-subscription',
    tabTitle: 'Tab title',
    isPromoCode: true,
    subscriptionPremiumDescriptionDate: '24/04/2017',
    checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png'
  }
};
