import Context from '../../slides/test/fixtures/context';

const playerProps = Context.props;

export default {
  props: {
    player: {
      ...playerProps,
      backgroundUrl: 'http://imagizer.imageshack.us/a/img924/9120/zxtxPV.jpg'
    }
  }
};
