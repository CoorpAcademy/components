import combined from './combined';

export default {
  props: {
    title: 'Audience',
    populations: {
      ...combined.props.populations,
      title: 'All My Group',
      options: [
        {name: 'Sales FR', value: 'sales-fr', selected: true, locked: true, count: '128 users'}
      ]
    }
  }
};
