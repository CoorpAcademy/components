import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 1,
    data: {
      skillRef1: 15.6,
      skillRef2: 43.8,
      skillRef3: 56.4
    },
    legend: {
      skillRef1: 'Adaptability and resilience',
      skillRef2: 'Digital culture',
      skillRef3: 'Problem solving'
    },
    colors: [
      {
        gradient: {
          fill: ['#218442ff', '#60f55585'],
          stroke: ['#e44e4eff', '#e18310']
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
    onExploreClick: skillRef => console.log(skillRef),
    onClick: skillref => console.log(`on dot click on ref: ${skillref}`)
  }
};

export default fixture;
