export default {
  props: {
    tabs: [
      {
        title: 'Tab Title',
        key: 'subscribe',
        targetContent: 'subscribe',
        links: [
          {
            title: 'subTitle'
          }
        ]
      }
    ],
    onTabClick: () => {},
    onBackToCatalogButtonClick: () => {},
    activeContent: 'subscribe',
    titles: {
      subscribe: 'This is the tab content title'
    },
    subscriptionFreemiumTitle: 'Freemium page title',
    subscriptionFreemiumDescription: `Bacon ipsum dolor amet jerky ground round beef ribs, pancetta tri-tip
    spare ribs beef frankfurter porchetta burgdoggen meatball landjaeger.`,
    subscriptionFreemiumButton: 'Launch Coorpacademy Premium',
    backToCatalogText: 'Back to catalog'
  }
};
