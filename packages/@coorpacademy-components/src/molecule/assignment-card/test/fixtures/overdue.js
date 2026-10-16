import certificationFixture from '../../../certification-card/test/fixtures/default';
import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Security certification',
    type: 'certification',
    certificationCard: {
      ...certificationFixture.props,
      label: 'security-certification',
      goal: {title: 'Security certification', condition: {nbDone: 1}},
      progress: 40,
      locales: {tag: 'Certification', conditionDescriptionProgress: '<b>2</b> modules to complete'}
    },
    dueState: 'overdue',
    notification: {message: 'Overdue', icon: 'overdue'},
    endDateLabel: 'Ended 10 October',
    assignments: fixture.props.assignments.map(assignment => ({...assignment}))
  }
};
