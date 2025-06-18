import {HeaderWithActionsPropsFixture} from '../../types';
import {COLORS} from '../../../../variables/colors';

const singleActionFixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {
      'aria-label': 'Close',
      onClick: () => {
        console.log('Close');
      }
    },
    title: 'Conflict Management',
    tag: {
      label: 'Published',
      type: 'success',
      size: 'S'
    },
    saveStatus: {
      display: false
    },
    actionButtons: [
      {
        label: 'Archive',
        type: 'secondary',
        onClick: () => console.log('click on Archive'),
        iconName: 'folder-open',
        iconColor: COLORS.cm_grey_700
      }
    ]
  }
};

export default singleActionFixture;
