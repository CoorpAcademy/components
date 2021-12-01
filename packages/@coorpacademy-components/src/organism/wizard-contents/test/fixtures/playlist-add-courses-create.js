/* eslint-disable no-console */
import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/three-sections';
import addCoursesForm from '../../../course-selection/test/fixtures/default';

export default {
  props: {
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
      label: 'Next Step',
      onClick: () => console.log('Next Step')
    }
  }
};
