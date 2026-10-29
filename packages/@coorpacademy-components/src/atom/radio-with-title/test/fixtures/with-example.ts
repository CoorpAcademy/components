import defaultFixture from './default';

export default {
  props: {
    ...defaultFixture.props,
    title: {
      ...defaultFixture.props.title,
      title: 'All completions count',
      subtitle: 'Completions before or after the assignment start date count.'
    },
    example: 'A learner who finished it last year is already done.'
  }
};
