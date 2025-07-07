export default {
  props: {
    skillInformations: {
      form: {},
      iconEditor: {title: '', iconPreview: {icon: {name: ''}}, inputText: {}}
    },
    translations: {title: '', subtitle: '', localesOptions: [], button: {label: ''}},
    content: {
      title: '',
      subtitle: '',
      button: {label: '', onClick: () => console.log('')},
      list: {search: {value: '', placeholder: '', onChange: () => console.log('')}}
    },
    isFetching: true
  }
};
