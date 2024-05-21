export default {
  props: {
    isOpen: true,
    isLoading: true,
    onCancel: () => console.log('cancel'),
    onConfirm: () => console.log('confirm'),
    onClose: () => console.log('close modal')
  }
};
