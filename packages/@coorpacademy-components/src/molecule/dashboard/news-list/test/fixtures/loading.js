import News from '../../../../news/test/fixtures/default';

const {props} = News;

export default {
  props: {
    title: 'Latest news',
    news: [props, props, props],
    loading: true
  }
};
