import wizardSummary from '../../../../molecule/wizard-summary/test/fixtures/one-section';
import generalInformation from '../../../brand-form/test/fixtures/wizard-playlists';

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
        done: false,
        current: true
      },
      {
        title: 'Translations',
        done: false
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
      ...generalInformation.props,
      type: 'form'
    },
    nextStep: {
      label: 'Next Step',
      onClick: () => console.log('Next Step')
    }
  }
};
