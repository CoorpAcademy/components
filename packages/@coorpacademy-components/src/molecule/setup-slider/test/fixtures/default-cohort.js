import CohortMessage from '../../../setup-slide/test/fixtures/alert-message';
import CohortItem from '../../../setup-slide/test/fixtures/cohort';
import CohortItemCreate from '../../../setup-slide/test/fixtures/create-new-cohort';

const {props} = CohortItem;
const propsCreate = CohortItemCreate.props;
const propsMessage = CohortMessage.props;
export default {
  props: {
    tabProps: [
      {
        title: 'Cohort 1: IT DE'
      },
      {
        title: 'Cohort 2: Sales FR'
      },
      {
        title: 'Cohort 3: Sales ES'
      },
      {
        title: 'Create a new Cohort'
      }
    ],
    slides: [props, propsMessage, propsMessage, propsCreate]
  }
};
