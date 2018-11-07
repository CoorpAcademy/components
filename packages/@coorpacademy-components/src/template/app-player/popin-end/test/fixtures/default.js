import SlidesHeader from '../../../player/slides/header/test/fixtures/learner';

const headerProps = SlidesHeader.props;

export default {
  props: {
    header: headerProps,
    summary: {
      header: {
        type: 'popinEnd'
      }
    }
  }
};
