import WithoutImage from './without-image';

const {props} = WithoutImage;

export default {
  props: {
    ...props,
    loading: true
  }
};
