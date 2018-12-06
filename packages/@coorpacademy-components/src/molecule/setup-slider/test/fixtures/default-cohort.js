import CohortItemMessage from '../../../setup-slide/test/fixtures/alert-message';
import CohortItem from './cohort';
import CohortItemCreate from './create-new';

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
