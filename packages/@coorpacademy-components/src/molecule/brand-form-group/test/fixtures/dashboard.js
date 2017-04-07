import SetupSections from '../../../setup-sections/test/fixtures/default';

const {props} = SetupSections;

export default {
  props: {
    title: 'Dashboard',
    subtitle: 'Explanation about the dashboard',
    fields: [{
      type: 'sections',
      ...props
    }]
  }
};
