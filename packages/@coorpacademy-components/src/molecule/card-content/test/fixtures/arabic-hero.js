import {MODES} from '../..';

export default {
  props: {
    mode: MODES.HERO,
    author: 'Coorpcademy',
    title: '<p align="right"> وضع الناء كانت تصاميم مطبوعه</p>',
    submitValue: 'Continue',
    progress: 0.67,
    onClick: () => console.log('card-content.hero.onclick')
  }
};
