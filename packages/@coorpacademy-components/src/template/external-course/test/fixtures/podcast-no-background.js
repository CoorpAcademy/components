export default {
  props: {
    type: 'podcast',
    url: 'https://static.coorpacademy.com/site/podcasts/Weekly%20wash%20up_20200608_FINAL.mp3',
    complete: {
      disabled: true,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    warning: {
      label: 'Report an error',
      onClick: () => console.log('Report an error')
    },
    contentType: 'audio/mp3'
  }
};
