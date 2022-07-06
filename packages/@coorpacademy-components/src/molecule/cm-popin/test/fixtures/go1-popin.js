export default {
  props: {
    message:
      "<b style='font-size: 20px;'>Get access to the ​most comprehensive learning and development library</b><p>Find exactly what you're looking for with access to hundreds of thousands of learning resources.</p><p>Contact your Customer Success Manager to find the right contents and add it immediately to your learning platform.</p>",
    header: 'https://static.coorpacademy.com/site/header-popin-go1.svg',
    firstButton: {
      label: 'Inquire now',
      type: 'primary',
      'aria-label': 'Inquire now',
      handleOnClick: () => console.log('Inquire now')
    },
    onClose: () => console.log('close')
  }
};
