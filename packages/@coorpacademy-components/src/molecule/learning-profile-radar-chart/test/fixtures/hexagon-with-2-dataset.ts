import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 2,
    data: {
      'Adaptability and resilience': [15.6, 5],
      'Digital culture': [43.8, 0.01],
      'Problem solving': [56.4, 10],
      Leadership: [59.1, 60],
      'Time management': [34.9, 90],
      'Sustainable thinking': [82.3, 25]
    },
    colors: [
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
        percentage: {
          color: '#ff8800ff',
          background:
            'linear-gradient(to bottom, rgba(133, 242, 234, 0.3), rgba(123, 213, 240, 0.3))'
        }
      }
    ],
    onClick: () => console.log('on click')
  }
};
export default fixture;
