import {HeaderWithActionsPropsFixture} from '../../types';
import {COLORS} from '../../../../variables/colors';

const defaultFixture: HeaderWithActionsPropsFixture = {
  props: {
    closeButton: {
      'aria-label': 'Close',
      onClick: () => {
        console.log('Close');
      }
    },
    title: 'Large Language Models',
    tag: {
      label: 'Ongoing changes',
      type: 'progress',
      size: 'S'
    },
    saveStatus: {
      label: 'Saved',
      display: true
    },
    bulletPointMenuButton: {
      buttons: [
        {
          dataName: 'discard-button',
          label: 'Discard changes',
          iconName: 'circle-xmark',
          iconColor: '#515161',
          onClick: () => console.log('click on Discard changes')
        },
        {
          dataName: 'archive-button',
          label: 'Archive',
          iconName: 'folder-open',
          iconColor: '#515161',
          onClick: () => console.log('click on Archive')
        },
        {
          dataName: 'delete-button',
          label: 'Delete',
          iconName: 'trash',
          iconColor: '#B81400',
          onClick: () => console.log('click on Delete')
        }
      ],
      buttonAriaLabel: 'More actions',
      disabled: false
    },
    actionButtons: [
      {
        label: 'Save changes',
        type: 'secondary',
        onClick: () => console.log('click Save changes'),
        disabled: true,
        iconName: 'floppy-disk',
        iconColor: COLORS.cm_grey_700
      },
      {
        label: 'Publish changes',
        type: 'primary',
        onClick: () => console.log('click Publish changes'),
        iconName: 'paper-plane',
        iconColor: COLORS.white
      }
    ],
    isFetching: false
  }
};

export default defaultFixture;
