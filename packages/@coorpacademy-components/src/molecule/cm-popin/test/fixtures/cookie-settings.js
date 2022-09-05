export default {
  props: {
    mode: 'cookie',
    cookieTitle: 'My preferences',
    firstButton: {
      label: 'Go back',
      type: 'secondary',
      'aria-label': 'Go back',
      handleOnClick: () => {},
      largeButton: true
    },
    secondButton: {
      label: 'Save preferences',
      type: 'primary',
      'aria-label': 'Save preferences',
      handleOnClick: () => {},
      largeButton: true
    },
    descriptionBtnTxt:
      'Use this page to accept or block tracking tags and analytics tools on our website.',
    listBtnSwicth: [
      {
        type: 'switch',
        title: 'Accept All',
        value: false,
        onChange: value => console.log(value),
        titlePosition: 'right',
        theme: 'mooc',
        'data-name': '-All'
      },
      {
        type: 'switch',
        title: 'Essential cookies',
        value: true,
        onChange: value => console.log(value),
        titlePosition: 'right',
        theme: 'coorpmanager',
        details: 'Essential cookies help our website to function adequately.',
        requiredSelection: true,
        disabled: true,
        'data-name': '-essetial'
      },
      {
        type: 'switch',
        title: 'Functionnal Cookies',
        value: true,
        onChange: value => console.log(value),
        titlePosition: 'right',
        theme: 'coorpmanager',
        details: 'Functional cookies help our website to function adequately.',
        'data-name': '-functionnal'
      },
      {
        type: 'switch',
        title: 'Web performance and analytics',
        value: false,
        onChange: value => console.log(value),
        titlePosition: 'right',
        theme: 'coorpmanager',
        details: 'We use this data to improve the performance of our websites and services',
        'data-name': '-performance'
      }
    ]
  }
};
