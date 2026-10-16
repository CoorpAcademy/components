import fixture from './default';

export default {
  props: {
    ...fixture.props,
    tabs: fixture.props.tabs.map(tab => ({...tab, selected: tab.key === 'done'})),
    cards: [],
    emptyState: {title: 'No finished contents', message: 'Finished learning appears here'}
  }
};
