import combined from './combined';

export default {
  props: {
    title: 'Audience',
    populations: {
      ...combined.props.populations,
      options: [
        {name: 'All users', value: 'ALL', selected: false, all: true, count: '12,480 users'}
      ]
    }
  }
};
