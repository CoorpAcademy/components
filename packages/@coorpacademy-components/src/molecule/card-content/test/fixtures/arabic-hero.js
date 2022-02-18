import {MODES} from '../..';

export default {
  props: {
    mode: MODES.HERO,
    author: 'Coorpcademy',
    title: '<p align="right"> وضع الناء كانت تصاميم مطبوعه</p>',
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
