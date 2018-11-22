import Slide from '../../../setup-cohort-item/test/fixtures/default';

const {props} = Slide;

export default {
  props: {
    tabProps: [
      {
        title: 'IT DE'
      },
      {
        title: 'Sales FR'
      },
      {
        title: 'Sales ES'
      },
      {
        title: 'Creat a new cohort'
      }
    ],
    formatTitle: (title, rowNumber, tabPropsLength) =>
      `${rowNumber !== tabPropsLength ? `Cohort ${rowNumber} : ${title}` : title}`,
    slides: [props, props, props, props],
    handleToFetch:()=>{console.log("handleToFetch")}
  }
};
