import {MODES} from '../..';

export default {
  props: {
    mode: MODES.HERO,
    author: 'Coorpcademy',
    title: '<p align="right"> وضع الناء كانت تصاميم مطبوعه</p>',
    submitValue: 'Continue',
    ariaLabel: 'Continue. Continue course',
    progress: 0.67,
    onClick: () => console.log('card-content.hero.onclick')
  }
};
