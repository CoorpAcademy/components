import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 2,
    data: {
      skillRef1: [15.6, 5],
      skillRef2: [43.8, 0.01],
      skillRef3: [56.4, 10],
      skillRef4: [59.1, 60],
      skillRef5: [34.9, 90],
      skillRef6: [82.3, 25]
    },
    legend: {
      skillRef1: 'Adaptability and resilience',
      skillRef2: 'Digital culture',
      skillRef3: 'Problem solving',
      skillRef4: 'Leadership',
      skillRef5: 'Time management',
      skillRef6: 'Sustainable thinking'
    },
    colors: [
      {
        gradient: {
          fill: ['#0062ffff', '#8000ff85'],
          stroke: ['#0062ffff', '#8000FF']
        },
        percentage: {
          color: '#ff8800ff'
        },
        label: {
          color: '#ff2f00ff'
        }
      },
      {
        percentage: {
          color: '#ff8800ff'
        }
      }
    ],
    onExploreClick: skillRef => console.log(skillRef),
    onClick: skillref => console.log(`on dot click on ref: ${skillref}`)
  }
};
export default fixture;
