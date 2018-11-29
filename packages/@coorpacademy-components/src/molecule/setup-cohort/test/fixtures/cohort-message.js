import CohortItemMessage from '../../../setup-cohort-item/test/fixtures/cohort-message';

const propsCohortMessage = CohortItemMessage.props;
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
    slides: [propsCohortMessage, propsCohortMessage, propsCohortMessage]
  }
};
