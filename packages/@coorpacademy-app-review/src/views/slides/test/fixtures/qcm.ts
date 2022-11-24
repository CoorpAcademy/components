import noop from 'lodash/fp/noop';
import {ReviewSlide} from '../..';

export const qcmUISlide: Partial<ReviewSlide> = {
  questionText: "Après la vente d'un NFT, son créateur peut-il toucher de l'argent ?",
  answerUI: {
    help: 'Sélectionnez la bonne réponse.',
    model: {
      type: 'qcm',
      answers: [
        {
          title: 'Le créateur peut fixer un pourcentage pour chaque transaction future',
          selected: false,
          onClick: noop,
          'aria-label': 'Le créateur peut fixer un pourcentage pour chaque transaction future'
        },
        {
          title:
            "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente",
          selected: false,
          onClick: noop,
          'aria-label':
            "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente"
        },
        {
          title:
            "Seule la galerie ou la plateforme peut toucher une commission sur la vente d'un NFT",
          selected: false,
          onClick: noop,
          'aria-label':
            "Seule la galerie ou la plateforme peut toucher une commission sur la vente d'un NFT"
        },
        {
          title: "Les NFT payés en ETH ne peuvent pas être soumis au paiement d'une commission",
          selected: false,
          onClick: noop,
          'aria-label':
            "Les NFT payés en ETH ne peuvent pas être soumis au paiement d'une commission"
        }
      ]
    }
  }
};
