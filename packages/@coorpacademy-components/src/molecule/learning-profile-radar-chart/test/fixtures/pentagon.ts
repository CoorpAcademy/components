import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 1,
    data: {
      'Adaptability and resilience': 15.6,
      'Digital culture': 43.8,
      'Problem solving': 56.4,
      Leadership: 59.1,
      'Time management': 34.9
    },
    colors: [
      {
        gradient: {
          fill: ['#0062ffff', '#8000ff85'],
          stroke: ['#0062ffff', '#8000FF ']
        },
        percentage: {
          color: '#007bffff',
          background:
            'linear-gradient(to bottom, rgba(133, 242, 234, 0.3), rgba(123, 213, 240, 0.3))'
        },
        label: {
          color: '#020202ff'
        }
      }
    ],
    onClick: () => console.log('on click')
  }
};

export default fixture;
