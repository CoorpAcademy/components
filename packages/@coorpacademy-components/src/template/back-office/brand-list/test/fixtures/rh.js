import Default from './default';

export default {
  props: {
    ...Default.props,
    create: null,
    search: {
      ...Default.props.search,
      select: {
        placeholder: 'Provider',
        title: 'Provider',
        description: 'You should select a provider',
        multiple: false,
        disabled: false,
        error: '',
        hint: '',
        options: [
          {
            name: 'Team platforms',
            value: 'smb',
            selected: false
          },
          {
            name: 'Forvia platforms',
            value: 'forvia-partners',
            selected: true
          }
        ],
        onChange: value => console.log('onChange', value),
        onError: () => false
      }
    }
  }
};
