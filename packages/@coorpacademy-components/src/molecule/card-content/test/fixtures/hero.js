import {MODES} from '../..';

export default {
  props: {
    mode: MODES.HERO,
    author: 'Coorpcademy',
    title: 'From Mass Market to One to One targeting',
    submitValue: 'Continue',
    ariaLabel: 'Continue. Continue course',
    progress: 0.67,
    onClick: () => console.log('card-content.hero.onclick')
  }
};
