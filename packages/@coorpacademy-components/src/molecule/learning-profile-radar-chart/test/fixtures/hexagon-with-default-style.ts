import {LearningProfileRadarChartPropTypes} from '../../types';

type Fixture = {props: LearningProfileRadarChartPropTypes};
const fixture: Fixture = {
  props: {
    totalDataset: 1,
    data: {
      skillRef1: 15.6,
      skillRef2: 43.8,
      skillRef3: 56.4,
      skillRef4: 59.1,
      skillRef5: 34.9,
      skillRef6: 82.3
    },
    legend: {
      skillRef1: 'Adaptability and resilience',
      skillRef2: 'Digital culture',
      skillRef3: 'Problem solving',
      skillRef4: 'Leadership',
      skillRef5: 'Time management',
      skillRef6: 'Sustainable thinking'
    },
    onExploreClick: skillRef => console.log(skillRef),
    onClick: skillref => console.log(`on dot click on ref: ${skillref}`)
  }
};

export default fixture;
