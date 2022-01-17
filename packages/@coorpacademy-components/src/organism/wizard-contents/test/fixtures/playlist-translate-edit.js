/* eslint-disable no-console */
import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/three-sections';
import translateForm from '../../../content-translation/test/fixtures/default';

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
        done: false,
        current: true
      },
      {
        title: 'Assign populations',
        done: false
      },
      {
        title: 'Add courses',
        done: false
      }
    ],
    summary: wizardSummary.props,
    content: {
      ...translateForm.props,
      type: 'translate'
    },
    previousStep: {
      label: 'Previous Step',
      onClick: () => console.log('Previous Step')
    },
    nextStep: {
      type: 'next',
      label: 'Next Step',
      onClick: () => console.log('Next Step')
    }
  }
};
