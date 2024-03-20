export default {
  props: {
    data: [
      {
        subject: 'Adaptability and resilience',
        value: 15.6,
        fullMark: 100
      },
      {
        subject: 'Digital culture',
        value: 43.8,
        fullMark: 100
      },
      {
        subject: 'Problem solving',
        value: 56.4,
        fullMark: 100
      },
      {
        subject: 'Leadership',
        value: 59.1,
        fullMark: 100
      }
    ],
    onClick: () => {
      console.log('on click');
    }
  }
};
