import WithoutVideo from './without-video';

const {props} = WithoutVideo;

export default {
  props: {
    ...props,
    loading: true
  }
};
