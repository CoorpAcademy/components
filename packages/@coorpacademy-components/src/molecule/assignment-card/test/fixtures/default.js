import card from '../../../card/test/fixtures/default';

export default {
  props: {
    ...card.props,
    title: 'Safety level',
    badge: undefined,
    dueState: 'todo',
    notification: {message: 'To complete', icon: 'todo'},
    endDateLabel: 'Ends 30 October',
    assignments: [{title: 'Safety onboarding'}]
  }
};
