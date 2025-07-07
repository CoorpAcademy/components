export default {
  props: {
    isFetching: true,
    title: '',
    closeButton: {
      'aria-label': '',
      onClick: () => console.log('')
    },
    tag: {
      label: 'Draft',
      type: 'warning',
      size: 'small'
    },
    saveStatus: {
      display: false,
      label: undefined
    },
    actionButtons: [],
    bulletPointMenuButton: {
      disabled: true,
      buttons: []
    }
  }
};
