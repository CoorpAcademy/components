export default {
  props: {
    data: [
      {
        subject: 'Adaptability and resilience',
        value: 30,
        fullMark: 100
      },
      {
        subject: 'Digital culture',
        value: 80,
        fullMark: 100
      },
      {
        subject: 'Problem solving',
        value: 50,
        fullMark: 100
      }
    ],
    onClick: () => {
      console.log('on click');
    }
  }
};
