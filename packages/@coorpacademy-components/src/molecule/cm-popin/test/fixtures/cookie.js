export default {
  props: {
    content:
      '<span>To provide the best experience we use technologies like cookies to help the website to function and also to track how you interact with our website. But for us to provide the best user experience, enable the specific cookies from Settings. Read our <a href="https://www.privacy.coorpacademy.com/up"> cookies policy</a> for more information.</span>',
    mode: 'cookie',
    cookieTitle: 'We use cookies to optimize your user experience',
    firstButton: {
      label: 'Cookies preferences',
      type: 'secondary',
      'aria-label': 'Cookies preferences',
      handleOnClick: () => {},
      customStyle: {}
    },
    secondButton: {
      label: 'Only essentials',
      type: 'secondary',
      'aria-label': 'Only essentials',
      handleOnClick: () => {},
      customStyle: {}
    },
    thirdButton: {
      label: 'Allow cookies',
      type: 'primary',
      'aria-label': 'Allow cookies',
      handleOnClick: () => {},
      customStyle: {}
    }
  }
};
