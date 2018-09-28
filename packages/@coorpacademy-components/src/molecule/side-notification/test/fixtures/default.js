export default {
  props: {
    header: "You've got an invitation",
    body: 'Click here to join',
    imageURL: 'https://via.placeholder.com/50x50',
    onClick: () => {
      console.log('this is a notification');
    },
    onClose: () => {
      console.log('this notfication is closed yeah !');
    }
  }
};
