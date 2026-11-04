import many from './many-populations';

export default {
  props: {
    ...many.props,
    populations: {
      ...many.props.populations,
      search: {...many.props.populations.search, value: 'Managers'},
      options: many.props.populations.options.map(option => ({
        ...option,
        selected: option.selected || option.name.startsWith('Managers')
      }))
    }
  }
};
