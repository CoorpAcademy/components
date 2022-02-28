import Default from './default';

export default {
  props: {
    ...Default.props,
    create: null,
    search: {
      ...Default.props.search,
      select: {
        placeholder: 'Provider',
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
        onChange: value => console.log(value)
      }
    }
  }
};
