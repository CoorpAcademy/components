export default {
  props: {
    type: 'survey',
    message: 'We would like to ask your opinion in order to improve our features.',
    closeLabel: 'Close',
    closeOnClick: () => console.log('Survey function'),
    acceptLabel: 'Take the survey',
    acceptHref: 'https://www.coorpacademy.com'
  }
};
