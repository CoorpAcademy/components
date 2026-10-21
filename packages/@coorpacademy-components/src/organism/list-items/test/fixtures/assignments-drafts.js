import Draft from '../../../assignment-row/test/fixtures/draft';

// The Drafts tab: an « Edit » button and a menu with « Publish » and « Delete », no tag and no
// progress (a draft is never synchronised).
export default {
  props: {
    title: '2 drafts',
    'aria-label': 'Assignment list',
    content: {
      type: 'list',
      itemType: 'assignment',
      items: [
        Draft.props,
        {
          ...Draft.props,
          title: 'Ladder safety — new joiners',
          subtitle: 'New joiners',
          details: '3 modules'
        }
      ].map((item, index) => ({...item, id: `draft-${index}`}))
    }
  }
};
