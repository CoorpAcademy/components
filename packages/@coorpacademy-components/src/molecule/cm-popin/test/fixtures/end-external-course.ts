import {noop} from 'lodash/fp';
import {CMPopinProps} from '../../types';
import {COLORS} from '../../../../variables/colors';

const {cm_primary_blue} = COLORS;

type Fixture = {
  props: CMPopinProps;
};

const fixture: Fixture = {
  props: {
    content: 'Vous êtes sur le point de quitter ce cours sans le valider',
    icon: 'CheckCircle1',
    mode: 'alert',
    descriptionText: `Souhaitez-vous marquer ce cours comme terminé ou poursuivre ce cours plus tard.`,
    firstButton: {
      label: `Je poursuivrai plus tard`,
      type: 'tertiary',
      customStyle: {
        color: '#ED3436'
      },
      'aria-label': 'Continue later',
      handleOnclick: noop
    },
    secondButton: {
      label: `J'ai terminé ce cours`,
      type: 'primary',
      customStyle: {
        backgroundColor: cm_primary_blue
      },
      'aria-label': `End session`,
      handleOnclick: noop
    }
  }
};

export default fixture;
