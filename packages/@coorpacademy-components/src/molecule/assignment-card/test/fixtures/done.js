import certificationFixture from '../../../certification-card/test/fixtures/default';
import fixture from './default';

export default {
  props: {
    ...fixture.props,
    title: 'Completed certification',
    type: 'certification',
    certificationCard: {
      ...certificationFixture.props,
      label: 'completed-certification',
      goal: {title: 'Completed certification', condition: {nbDone: 3}},
      progress: 100,
      locales: {tag: 'Certification', conditionDescriptionProgress: 'All modules completed'}
    },
    dueState: 'done',
    notification: {message: 'Completed', icon: 'done'},
    endDateLabel: 'Ended 1 October',
    assignments: fixture.props.assignments.map(assignment => ({...assignment}))
  }
};
