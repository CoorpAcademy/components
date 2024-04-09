import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 3,
    data: {
      skillRef1: [15.6, 5, 45],
      skillRef2: [43.8, 0.01, 20],
      skillRef3: [56.4, 10, 70],
      skillRef4: [59.1, 60, 14],
      skillRef5: [34.9, 90, 45],
      skillRef6: [82.3, 25, 12]
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
          stroke: ['#0062ffff', '#8000FF ']
        },
        percentage: {
          color: '#ff8800ff'
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
          color: '#ff8800ff'
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
          color: '#198dcbff'
        },
        label: {
          color: '#000000ff'
        }
      }
    ],
    onClick: skillref => console.log(`on dot click on ref: ${skillref}`)
  }
};

export default fixture;
