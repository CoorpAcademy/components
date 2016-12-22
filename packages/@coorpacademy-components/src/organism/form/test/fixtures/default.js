import FormGroup from '../../../../molecule/form-group/test/fixtures/default';

const group = FormGroup.props;

export default {
  props: {
    title: 'Modification Brand',
    groups: [group, group, group],
    submitValue: 'Enregistrer',
    resetValue: 'Annuler',
    onSubmit: () => console.log('submit'), // eslint-disable-line no-console
    onReset: () => console.log('reset') // eslint-disable-line no-console
  }
};
