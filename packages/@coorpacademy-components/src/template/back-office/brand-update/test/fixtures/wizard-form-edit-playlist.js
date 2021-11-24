import warningNotifiation from '../../../../../molecule/banner/test/fixtures/default';
import wizardSummary from '../../../../../molecule/wizard-summary/test/fixtures/three-sections';
import generalInformation from '../../../../../organism/brand-form/test/fixtures/wizard-playlists';
import headerAndMenu from './default';

const {header, items, logo} = headerAndMenu.props;

export default {
  props: {
    header,
    items,
    logo,
    notifications: [warningNotifiation.props],
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
      label: '',
      onClick: () => console.log('Next Step')
    }
  }
};
