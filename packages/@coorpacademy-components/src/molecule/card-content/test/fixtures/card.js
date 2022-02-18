import {MODES} from '../..';

export default {
  props: {
    mode: MODES.CARD,
    author: 'Coorpcademy',
    title: 'From Mass Market to One to One targeting',
    progress: 0.32,
    'aria-label': {
      author: 'auther name',
      progression: 'you have done 65% of the course',
      adaptive: 'this is an adaptive course'
    }
  }
};
