export default {
  props: {
    name: 'Megatrends and thematic essentials',
    type: 'scorm',
    url:
      'https://media.radiofrance-podcast.net/podcast09/app_rf_promotion.mp3?replayCu=11171&stationId=2',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    },
    complete: {
      disabled: true,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    warning: {
      label: 'Report an error',
      onClick: () => console.log('Report an error')
    }
  }
};
