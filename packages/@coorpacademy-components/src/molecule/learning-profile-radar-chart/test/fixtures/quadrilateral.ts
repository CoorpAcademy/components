import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 1,
    data: {
      skillRef1: 15.6,
      skillRef2: 43.8,
      skillRef3: 56.4,
      skillRef4: 59.1
    },
    legend: {
      skillRef1: 'Adaptability and resilience',
      skillRef2: 'Digital culture',
      skillRef3: 'Problem solving',
      skillRef4: 'Leadership'
    },
    colors: [
      {
        gradient: {
          fill: ['#0062ffff', '#8000ff85'],
          stroke: ['#0062ffff', '#8000FF']
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
    onClick: skillref => console.log(`on dot click on ref: ${skillref}`)
  }
};

export default fixture;
