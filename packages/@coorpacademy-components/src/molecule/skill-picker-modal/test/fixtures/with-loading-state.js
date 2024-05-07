export default {
  props: {
    isOpen: true,
    isLoading: true,
    isError: false,
    footerDescription: 'Select at least 3 more skills',
    onCancel: () => console.log('cancel'),
    onConfirm: () => console.log('confirm'),
    onClose: () => console.log('close modal')
  }
};
