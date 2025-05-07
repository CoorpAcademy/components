export default {
  props: {
    content: 'Unsaved changes?',
    descriptionText: 'Do you want to save in draft or discard before quitting?',
    icon: {
      iconName: 'circle-exclamation',
      iconColor: '#A38300',
      backgroundColor: '#FFF9D1',
      preset: 'xl'
    },
    firstButton: {
      label: 'Discard',
      type: 'secondary',
      'aria-label': 'Discard this operation',
      handleOnClick: () => {},
      customStyle: {
        fontWeight: '600'
      }
    },
    secondButton: {
      label: 'Save in draft',
      type: 'primary',
      'aria-label': 'Save in draft this operation',
      handleOnClick: () => {},
      icon: {
        position: 'left',
        faIcon: {
          name: 'floppy-disk',
          color: 'white',
          size: 14,
          customStyle: {
            padding: 0,
            alignItems: 'baseline'
          }
        }
      },
      customStyle: {
        fontWeight: '600'
      }
    }
  }
};
