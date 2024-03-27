export default {
  props: {
    totalDataset: 1,
    data: {
      'Adaptability and resilience': 15.6,
      'Digital culture': 43.8,
      'Problem solving': 56.4
    },
    styles: [
      {
        gradient: {
          fill: ['#218442ff', '#60f55585'],
          stroke: ['#e44e4eff', '#e18310 ']
        },
        percentage: {
          color: '#9f371eff',
          background:
            'linear-gradient(to bottom, rgba(202, 219, 219, 0.3), rgba(191, 207, 212, 0.3))'
        },
        label: {
          color: '#020202ff'
        }
      }
    ],
    onDotClick: () => console.log('on click')
  }
};
