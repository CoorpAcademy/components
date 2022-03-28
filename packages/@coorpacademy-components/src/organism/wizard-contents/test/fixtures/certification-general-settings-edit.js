/* eslint-disable no-console */
import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/one-section';
import generalInformation from '../../../brand-form/test/fixtures/wizard-certification';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Edit certification',
      onClick: () => console.log('Close')
    },
    steps: [
      {
        title: 'General Informations',
        done: false,
        current: true
      },
      {
        title: 'Translations',
        done: false
      },
      {
        title: 'Add courses',
        done: false
      },
      {
        title: 'Courses settings',
        done: false
      }
    ],
    summary: wizardSummary.props,
    content: {
      ...generalInformation.props,
      type: 'form'
    },
    nextStep: {
      label: 'Next Step',
      onClick: () => console.log('Next Step')
    }
  }
};
