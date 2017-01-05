export default {
  props: {
    createHref: '#',
    search: {
      value: '',
      placeholder: 'Name, last name…',
      onChange: () => {}
    },
    pagination: {
      value: '1-10 on 50',
      nextHref: '#',
      previousHref: '#'
    },
    emptyValue: 'There is nothing to display.',
    isPending: false
  }
};
