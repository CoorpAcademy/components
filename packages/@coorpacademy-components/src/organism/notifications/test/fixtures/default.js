export default {
  props: {
    notifications: [
      {
        notificationId: 'lol',
        header: "You've got an invitation",
        body: 'Click here to join',
        imageURL: 'https://via.placeholder.com/50x50',
        onClick: () => {
          console.log('this is a notification1');
        },
        onClose: () => {
          console.log('this notfication is closed yeah !');
        }
      },
      {
        notificationId: 'lol2',
        header: "You've got an invitation",
        body: 'Click here to join',
        imageURL: 'https://via.placeholder.com/50x50',
        onClick: () => {
          console.log('this is a notification2');
        },
        onClose: () => {
          console.log('this notfication is closed yeah !');
        }
      },
      {
        notificationId: 'lol1',
        header: "You've got an invitation",
        body: 'Click here to join',
        imageURL: 'https://via.placeholder.com/50x50',
        onClick: () => {
          console.log('this is a notification3');
        },
        onClose: () => {
          console.log('this notfication is closed yeah !');
        }
      }
    ]
  }
};
