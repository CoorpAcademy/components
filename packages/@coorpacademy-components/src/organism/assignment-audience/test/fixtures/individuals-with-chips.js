import combined from './combined';
import fixture from './idle';

export default {
  props: {
    ...fixture.props,
    individuals: {
      ...combined.props.individuals,
      value: 'mar',
      suggestions: [
        {id: 'u3', label: 'Marie Leroy', login: 'm.leroy'},
        {id: 'u4', label: 'Marco Bianchi', login: 'marco.b'}
      ]
    },
    total: {label: 'Estimated audience: 2 learners', detail: '2 picked'}
  }
};
