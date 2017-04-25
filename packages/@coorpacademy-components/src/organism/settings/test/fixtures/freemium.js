export default {
  props: {
    tabs: [
      {
        title: 'Subscription title',
        key: 'subscribe',
        activeContent: 'subscribe',
        links: [
          {
            title: 'Fremium title'
          }
        ]
      }
    ],
    onTabClick: () => {},
    onBackToCatalogButtonClick: () => {},
    activeContent: 'subscribe',
    tabTitle: 'Tab title'
  }
};
