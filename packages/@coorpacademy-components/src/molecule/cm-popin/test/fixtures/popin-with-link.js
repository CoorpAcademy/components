export default {
  props: {
    content: 'Some users were not imported',
    descriptionText:
      'The massive battle will only be send to 265 users. 35 out of 300 users were not imported.',
    onClose: () => {
      console.log('close');
    },
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      handleOnclick: () => {
        console.log('cancel');
      },
      'aria-label': 'Cancel this operation'
    },
    secondButton: {
      label: 'Undo',
      type: 'primary',
      handleOnclick: () => {
        console.log('undo');
      },
      'aria-label': 'Undo this operation'
    },
    link: {
      href: '#',
      children: ['Download report'],
      onClick: () => {
        console.log('hello');
      },
      download: true,
      style: {
        textDecoration: 'underline',
        margin: '20px',
        fontFamily: 'Gilroy',
        fontSize: '16px',
        fontWeight: '500'
      }
    }
  }
};
