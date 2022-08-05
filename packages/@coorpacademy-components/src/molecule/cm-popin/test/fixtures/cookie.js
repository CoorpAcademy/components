export default {
  props: {
    content:
      '<span>To provide the best experience we use technologies like cookies to help the website to function and also to track how you interact with our website. But for us to provide the best user experience, enable the specific cookies from Settings. Read our <a href="https://example.com"> cookies policy</a> for more information.</span>',
    mode: 'cookie',
    cookieTitle: 'We use cookies to optimize your user experience',
    firstButton: {
      label: 'Cookies preferences',
      type: 'secondary',
      'aria-label': 'Cookies preferences',
      handleOnClick: () => {}
    },
    secondButton: {
      label: 'Only essentials',
      type: 'secondary',
      'aria-label': 'Only essentials',
      handleOnClick: () => {}
    },
    thirdButton: {
      label: 'Allow cookies',
      type: 'primary',
      'aria-label': 'Allow cookies',
      handleOnClick: () => {}
    }
  }
};
