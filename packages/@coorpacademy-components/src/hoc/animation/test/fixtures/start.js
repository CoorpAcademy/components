import {BOUNCE} from '../..';

export default {
  props: {
    name: 'fixture',
    bezier: BOUNCE,
    duration: 5000,
    animated: true
  },
  children: x => x
};
