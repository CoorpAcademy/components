import DefaultProps from './default';

export default {
  props: {
    ...DefaultProps.props,
    sorting: null,
    locales: {
      title: 'Passports',
      subtitle: 'Validate your Passports here',
      tag: 'Passport',
      count: '1 passport'
    }
  }
};
