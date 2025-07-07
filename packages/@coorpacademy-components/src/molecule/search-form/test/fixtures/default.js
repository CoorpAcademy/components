export default {
  props: {
    action: '/search',
    method: 'post',
    onSubmit: () => console.log('onSubmit'),
    search: {
      placeholder: 'keywords, names...',
      value: 'digital',
      onChange: value => console.log('onChange', value),
      onFocus: () => {},
      onBlur: () => {}
    },
    onReset: () => console.log('onReset'),
    onSearchFocus: () => console.log('on search Focus'),
    onSearchBlur: () => console.log('on search Blur'),
    searchIconAriaLabel: 'search icon fixture'
  }
};
