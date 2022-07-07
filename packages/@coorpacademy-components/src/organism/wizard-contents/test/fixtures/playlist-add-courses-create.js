import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/organize-courses';
import addCoursesForm from '../../../course-selection/test/fixtures/default';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Edit custom playlist',
      onClick: () => console.log('Close')
    },
    steps: [
      {
        title: 'General Informations',
        done: true
      },
      {
        title: 'Translations',
        done: true
      },
      {
        title: 'Assign populations',
        done: true
      },
      {
        title: 'Add courses',
        done: false,
        current: true
      }
    ],
    summary: wizardSummary.props,
    content: {
      ...addCoursesForm.props,
      type: 'courses'
    },
    previousStep: {
      label: 'Previous Step',
      onClick: () => console.log('Previous Step')
    },
    nextStep: {
      type: 'publish',
      label: 'Publish',
      onClick: () => console.log('Next Step')
    }
  }
};
