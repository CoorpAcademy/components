export default {
  props: {
    data: {
      'Adaptability and resilience': [15.6, 5, 45],
      'Digital culture': [43.8, 0.01, 20],
      'Problem solving': [56.4, 10, 70],
      Leadership: [59.1, 60, 14],
      'Time management': [34.9, 90, 45],
      'Sustainable thinking': [82.3, 25, 12]
    },
    styles: [
      {
        gradient: {
          fill: ['#0062ffff', '#8000ff85'],
          stroke: ['#0062ffff', '#8000FF ']
        },
        percentage: {
          color: '#ff8800ff',
          background:
            'linear-gradient(to bottom, rgba(133, 242, 234, 0.3), rgba(123, 213, 240, 0.3))'
        },
        label: {
          color: '#ff2f00ff'
        }
      },
      {
        gradient: {
          fill: ['#d900ffff', '#ff002691'],
          stroke: ['#d900ffff', '#ff0026']
        },
        percentage: {
          color: '#ff8800ff',
          background:
            'linear-gradient(to bottom, rgba(133, 242, 234, 0.3), rgba(123, 213, 240, 0.3))'
        },
        label: {
          color: '#ff2f00ff'
        }
      },
      {
        gradient: {
          fill: ['#198dcbff', '#58f0e891'],
          stroke: ['#198dcbff', '#58f0e891']
        },
        percentage: {
          color: '#198dcbff',
          background:
            'linear-gradient(to bottom, rgba(133, 242, 234, 0.3), rgba(123, 213, 240, 0.3))'
        },
        label: {
          color: '#000000ff'
        }
      }
    ],
    onClick: () => console.log('on click')
  }
};
