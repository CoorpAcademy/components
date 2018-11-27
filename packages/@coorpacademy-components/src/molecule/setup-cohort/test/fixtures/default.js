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
      }
    ],
    formatTitle: (title, rowNumber) => `Cohort ${rowNumber} : ${title}`,
    slides: [props, props, props],
    tabNew: [
      {
        title: 'Create a new cohort'
      }
    ],
    slidesNew: [propsCreate]
  }
};
