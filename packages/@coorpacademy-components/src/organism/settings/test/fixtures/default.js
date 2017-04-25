export default {
  props: {
    tabs: [
      {
        title: 'Title',
        key: 'subscribe',
        targetContent: 'subscribe',
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
