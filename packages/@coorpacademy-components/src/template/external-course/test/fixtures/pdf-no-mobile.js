export default {
  props: {
    name: 'Massive Open Online Course',
    type: 'article',
    url: 'https://api.coorpacademy.com/external/3673d4b6-bf5a-4b24-9665-ad97dc9b89da.pdf',
    quit: {
      label: 'close',
      onClick: () => console.log('close')
    },
    complete: {
      disabled: false,
      label: 'finish',
      onClick: () => console.log('finish')
    },
    loading: false
  }
};
