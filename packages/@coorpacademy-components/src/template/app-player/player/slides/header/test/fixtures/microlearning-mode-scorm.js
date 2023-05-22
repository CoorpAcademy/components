export default {
  props: {
    type: 'microlearning',
    content: {
      onClick: () => console.log('onClick microlearning'),
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: 1
    },
    mode: 'scorm'
  }
};
