/* eslint-disable no-console */
import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/three-sections';
import populationsForm from '../../../search-and-chips-results/test/fixtures/sorted-selected';

export default {
  props: {
    wizardHeader: {
      title: 'Create custom playlist',
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
        done: false,
        current: true
      },
      {
        title: 'Add courses',
        done: false
      }
    ],
    summary: wizardSummary.props,
    content: {
      ...populationsForm.props,
      type: 'populations'
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
