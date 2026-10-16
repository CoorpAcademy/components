import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Leadership level',
    type: 'course',
    dueState: 'dueSoon',
    notification: {message: 'Due soon', icon: 'dueSoon'},
    endDateLabel: 'Ends 20 October',
    assignments: fixture.props.assignments.map(assignment => ({...assignment}))
  }
};
