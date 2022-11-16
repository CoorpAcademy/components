import {noop} from 'lodash/fp';
import {CMPopinProps} from '../../types';

type Fixture = {
  props: CMPopinProps;
};

const fixture: Fixture = {
  props: {
    content: 'Tu nous quittes déjà?',
    icon: 'MoonRocket',
    mode: 'alert',
    descriptionText: `Tu vas t'en sortir ! Si tu arrêtes maintenant, tu vas perdre ta progression.`,
    firstButton: {
      label: `Arrêter ma session`,
      type: 'tertiary',
      customStyle: {
        color: '#ED3436'
      },
      'aria-label': 'Stop session',
      handleOnclick: noop
    },
    secondButton: {
      label: `Continuer d'apprendre`,
      type: 'primary',
      'aria-label': 'Continue review',
      customStyle: {
        backgroundColor: '#248e59'
      },
      handleOnclick: noop
    }
  }
};

export default fixture;
