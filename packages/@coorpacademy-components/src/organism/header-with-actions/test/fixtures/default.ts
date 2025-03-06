import {HeaderWithActionsPropsFixture} from '../../types';
import {COLORS} from '../../../../variables/colors';

const defaultFixture: HeaderWithActionsPropsFixture = {
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
          'data-name': 'discard-button',
          label: 'Discard changes',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'circle-xmark', color: '#515161', size: 14}
          },
          onClick: () => console.log('click on Discard changes'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB',
            padding: '6px'
          }
        },
        {
          'data-name': 'archive-button',
          label: 'Archive',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'folder-open', color: '#515161', size: 14}
          },
          onClick: () => console.log('click on Archive'),
          customStyle: {
            color: '#1D1D2B',
            hoverBackgroundColor: '#EAEAEB',
            padding: '6px'
          }
        },
        {
          'data-name': 'delete-button',
          label: 'Delete',
          linkType: 'tertiary',
          icon: {
            position: 'left',
            faIcon: {name: 'trash', color: '#B81400', size: 14}
          },
          onClick: () => console.log('click on Delete'),
          customStyle: {
            color: '#991100',
            hoverBackgroundColor: '#FCDADA',
            padding: '6px'
          }
        }
      ],
      onClick: () => console.log('click on bullet point menu')
    },
    actionButtons: [
      {
        label: 'Save changes',
        type: 'secondary',
        onClick: () => console.log('click Save changes'),
        disabled: true,
        icon: {
          position: 'left',
          faIcon: {
            name: 'floppy-disk',
            color: COLORS.cm_grey_700,
            size: 14
          }
        },
        customStyle: {
          fontWeight: '600',
          borderRadius: '12px'
        }
      },
      {
        label: 'Publish changes',
        type: 'primary',
        onClick: () => console.log('click Publish changes'),
        icon: {
          position: 'left',
          faIcon: {
            name: 'circle-check',
            color: COLORS.white,
            size: 14
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

export default defaultFixture;
