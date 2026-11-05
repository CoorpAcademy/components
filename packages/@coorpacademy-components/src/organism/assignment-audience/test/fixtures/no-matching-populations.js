import many from './many-populations';

export default {
  props: {
    ...many.props,
    populations: {
      ...many.props.populations,
      search: {...many.props.populations.search, value: 'No matching name'}
    }
  }
};
