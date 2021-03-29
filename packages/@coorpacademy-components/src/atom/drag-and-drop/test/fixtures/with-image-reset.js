import WithImage from './with-image';

const {props} = WithImage;
export default {
  props: {
    ...props,
    onReset: () => console.log('reset')
  }
};
