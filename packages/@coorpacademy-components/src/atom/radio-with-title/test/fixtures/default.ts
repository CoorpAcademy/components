export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Select one or several cohortes',
      subtitle: 'in the drop-down list'
    },
    checked: false,
    onChange: (value: boolean) => {
      console.log('on change', value);
    }
  }
};
