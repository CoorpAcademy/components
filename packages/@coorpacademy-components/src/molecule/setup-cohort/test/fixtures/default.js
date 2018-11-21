import Slide from '../../../setup-cohort-item/test/fixtures/default';

const {props} = Slide;

export default {
  props: {
    formatTitle: (title, rowNumber) => `Cohort ${rowNumber} : ${title}`,
    tabProps: [
      {
        title: 'IT DE'
      },
      {
        title: 'Sales FR'
      },
      {
        title: 'Sales ES'
      }
    ],
    slides: [props, props, props]
  }
};
