/* eslint-disable no-console */
import wizardSummaryOrganizeCourses from '../../../../molecule/wizard-summary/test/fixtures/organize-courses';
import organizeCoursesForm from '../../../../molecule/course-sections/test/fixtures/default';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Create a new custom playlist',
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
        done: true
      },
      {
        title: 'Organize courses',
        done: false,
        current: true
      }
    ],
    summary: wizardSummaryOrganizeCourses.props,
    content: {
      ...organizeCoursesForm.props,
      type: 'organize-courses'
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
