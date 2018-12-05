import CohortItem from '../../../setup-cohort-item/test/fixtures/default';
import CohortItemCreate from '../../../setup-cohort-item/test/fixtures/create-new';
import CohortItemMessage from '../../../setup-cohort-item/test/fixtures/cohort-message';

const {props} = CohortItem;
const propsCohortMessage = CohortItemMessage.props;
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
    slides: [props, propsCohortMessage, propsCohortMessage],
    tabNew: [
      {
        title: 'Create a new cohort'
      }
    ],
    slidesNew: [propsCreate]
  }
};
