export default {
  props: {
    tabs: [
      {
        title: 'Tab Title',
        onTabClick() {},
        key: 'subscribe',
        targetContent: 'subscribe',
        links: [
          {
            title: 'title'
          }
        ]
      }
    ],
    onBackToCatalogButtonClick: () => {},
    activeContent: 'subscribe',
    translations: {
      titles: {},
      backToCatalogText: 'Back to catalog'
    }
  }
};
