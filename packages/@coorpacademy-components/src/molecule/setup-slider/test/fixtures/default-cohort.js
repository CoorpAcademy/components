import CohortMessage from './alert-message';
import CohortItem from './cohort';
import CohortItemCreate from './create-new-cohort';

const propsCohort = CohortItem.props.slides;
const propsCreate = CohortItemCreate.props.slides;
const propsMessage = CohortMessage.props.slides;
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
    slides: [propsCohort, propsMessage, propsMessage, propsCreate]
  }
};
