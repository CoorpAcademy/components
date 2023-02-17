import {BattleOpponentProps} from '../../prop-types';

const fixture: {props: BattleOpponentProps} = {
  props: {
    isAlreadyEngaged: true,
    userAvatarSrc: 'https://via.placeholder.com/150/16ac8c/FAFAFA?text=Fe',
    tooltipText:
      "Vous avez déjà une battle en cours sur ce sujet avec cette personne. Vous pouvez choisir quelqu'un d'autre ou sélectionner un cours différent.",
    displayName: 'Ferb Fletcher',
    'aria-label': 'battle opponent button aria label'
  }
};

export default fixture;
