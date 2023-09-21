import form from '../../../../molecule/brand-form-group/test/fixtures/bulk-massive-import';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'New import',
      onClick: () => console.log('Close')
    },
    content: {
      groups: [form.props],
      type: 'form'
    },
    nextStep: {
      label: 'Next step',
      onClick: () => console.log('Next Step')
    }
  }
};
