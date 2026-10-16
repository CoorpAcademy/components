import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Completed certification',
    type: 'certification',
    dueState: 'done',
    notification: {message: 'Completed', icon: 'done'},
    endDateLabel: 'Ended 1 October',
    assignments: fixture.props.assignments.map(assignment => ({...assignment}))
  }
};
