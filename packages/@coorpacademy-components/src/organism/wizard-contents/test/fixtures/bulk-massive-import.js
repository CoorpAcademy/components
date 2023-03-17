import form from '../../../../molecule/brand-form-group/test/fixtures/bulk-massive-import';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Massive impoprt',
      onClick: () => console.log('Close')
    },
    steps: [
      {
        title: 'Import',
        current: true,
        done: false
      },
      {
        title: 'Inspect',
        done: false
      }
    ],
    content: {
      groups: [...form.props],
      type: 'form'
    },
    nextStep: {
      label: 'Next step',
      onClick: () => console.log('Next Step')
    }
  }
};
