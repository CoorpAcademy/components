import Animations from '../../../../molecule/brand-form-group/test/fixtures/animations';

const {props} = Animations;

export default {
  props: {
    groups: [props],
    onSubmit: () => {
      console.log('Send a massive battle');
    },
    submitValue: 'Send a massive battle',
    theme: 'cm'
  }
};
