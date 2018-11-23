import Slide from '../../../setup-cohort-item/test/fixtures/create-new';

const {props} = Slide;

export default {
  props: {
    tabProps: [
      {
        title: 'Creat a new cohort'
      }
    ],
    formatTitle: (title, rowNumber, tabPropsLength) =>
      `${rowNumber !== tabPropsLength ? `Cohort ${rowNumber} : ${title}` : title}`,
    slides: [props]
  }
};
