/* eslint-disable no-console */
import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/three-sections';
import rewardsForm from '../../../rewards-form/test/fixtures/default';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Create a new certification',
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
        title: 'Courses settings',
        done: true
      },
      {
        title: 'Rewards',
        done: false,
        current: true
      }
    ],
    summary: wizardSummary.props,
    content: {
      ...rewardsForm.props,
      type: 'rewards'
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
