import {noop} from 'lodash/fp';
import {Props} from '../../types';

type Fixture = {
  props: Props;
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
      handleOnclick: noop
    }
  }
};

export default fixture;
