import CohortItem from '../../../setup-cohort-item/test/fixtures/default';
import CohortItemCreate from '../../../setup-cohort-item/test/fixtures/create-new';

const {props} = CohortItem;
const propsCreate = CohortItemCreate.props;
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
    slides: [props, props, props, propsCreate]
  }
};
