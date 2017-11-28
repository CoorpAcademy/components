import {BOUNCE} from '../..';

export default {
  props: {
    bezier: BOUNCE,
    duration: 5000,
    animated: true
  },
  children: x => x
};
