import {MODES} from '../..';

export default {
  props: {
    mode: MODES.HERO,
    author: 'Coorpcademy',
    title: 'From Mass Market to One to One targeting',
    submitValue: 'Continue',
    progress: 0.67,
    onClick: () => console.log('card-content.hero.onclick'),
    'aria-label': {
      author: 'auther name',
      progression: 'you have done 65% of the course',
      adaptive: 'this is an adaptive course'
    }
  }
};
