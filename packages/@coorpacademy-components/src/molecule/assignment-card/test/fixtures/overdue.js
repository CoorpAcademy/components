import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Security certification',
    type: 'certification',
    dueState: 'overdue',
    notification: {message: 'Overdue', icon: 'overdue'},
    endDateLabel: 'Ended 10 October',
    assignments: fixture.props.assignments.map(assignment => ({...assignment}))
  }
};
