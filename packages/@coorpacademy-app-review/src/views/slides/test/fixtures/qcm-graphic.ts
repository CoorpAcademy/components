import noop from 'lodash/fp/noop';
import {ReviewSlide} from '../..';

export const qcmGraphicUISlide: Partial<ReviewSlide> = {
  questionText: 'Quels sont les 4 piliers de l’apprentissage ?',
  answerUI: {
    help: 'Sélectionnez les 4 bonnes réponses.',
    model: {
      type: 'qcmGraphic',
      answers: [
        {
          title: 'La consolidation des acquis',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_180530003-1618999931321.jpg',
          selected: false,
          ariaLabel: 'La consolidation des acquis',
          onClick: noop
        },
        {
          title: 'Le retour d’information',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_1170951868-1618999931510.jpg',
          selected: false,
          ariaLabel: 'Le retour d’information',
          onClick: noop
        },
        {
          title: 'L’engagement actif',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_439207960-1618999931642.jpg',
          selected: false,
          ariaLabel: 'L’engagement actif',
          onClick: noop
        },
        {
          title: 'La motivation',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_538654849-1618999935091.jpg',
          selected: false,
          ariaLabel: 'La motivation',
          onClick: noop
        },
        {
          title: 'L’attention',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_485162803-1618999941454.jpg',
          selected: false,
          ariaLabel: 'L’attention',
          onClick: noop
        },
        {
          title: 'La confiance en soi',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_374136655-1619000050478.jpg',
          selected: false,
          ariaLabel: 'La confiance en soi',
          onClick: noop
        },
        {
          title: 'La capacité d’abstraction',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_142530529-1618999997389.jpg',
          selected: false,
          ariaLabel: 'La capacité d’abstraction',
          onClick: noop
        },
        {
          title: 'L’abnégation',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-science-et-vie/cockpit-science-et-vie/default/shutterstock_5948041-1618999993222.jpg',
          selected: false,
          ariaLabel: 'L’abnégation',
          onClick: noop
        }
      ]
    }
  }
};
