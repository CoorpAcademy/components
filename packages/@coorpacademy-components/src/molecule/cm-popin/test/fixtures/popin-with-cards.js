import CardsGrid from '../../../../organism/cards-grid/test/fixtures/catalog';

export default {
  props: {
    header: {
      title: {
        title: 'This course is locked',
        subtitle: 'To access this course, please complete the following courses first:',
        type: 'form-group',
        subtitleSize: 'small-without-margin'
      },
      headerIcon: 'lockedContent'
    },
    onClose: () => console.log('close'),
    mode: 'items',
    items: {
      type: 'content',
      list: CardsGrid.props
    }
  }
};
