import {HeaderWithActionsPropsFixture} from '../../types';
import {COLORS} from '../../../../variables/colors';

const singleActionFixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {
      size: 'default',
      icon: 'close',
      'data-name': 'close-button',
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
        icon: {
          position: 'left',
          faIcon: {
            name: 'folder-open',
            color: COLORS.cm_grey_700,
            size: 14,
            customStyle: {padding: 0}
          }
        },
        customStyle: {
          fontWeight: '600',
          borderRadius: '12px'
        }
      }
    ]
  }
};

export default singleActionFixture;
