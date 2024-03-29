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
      'Time management': 34.9,
      'Sustainable thinking': 82.3
    },
    onClick: () => console.log('on dot click')
  }
};

export default fixture;
