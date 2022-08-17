import noop from 'lodash/fp/noop';
import {SlideFromAPI, UISlide} from '../../../types/common';

export const qcmGraphicSlide: SlideFromAPI = {
  question: {
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      choices: [
        {
          media: {
            src: [
              {
                _id: '624efd915948a7013083e986',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/true-1512554153232.jpg',
                id: '624efd915948a7013083e986'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '624efd915948a7013083e985',
          label: 'Vrai',
          value: 'sli_VkSQroQnx.choice_NJesyUo7nx',
          id: '624efd915948a7013083e985'
        },
        {
          media: {
            src: [
              {
                _id: '624efd915948a7013083e988',
                mimeType: 'image/jpeg',
                url: '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/false-1512554160848.jpg',
                id: '624efd915948a7013083e988'
              }
            ],
            posters: [],
            subtitles: [],
            type: 'img'
          },
          items: [],
          _id: '624efd915948a7013083e987',
          label: 'Faux',
          value: 'sli_VkSQroQnx.choice_VkgayLjX3e',
          id: '624efd915948a7013083e987'
        }
      ]
    },
    type: 'qcmGraphic',
    header: 'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?',
    explanation: 'Sélectionnez la bonne réponse.'
  },
  klf: "Il ne faut pas prendre la négociation comme une affaire personnelle, afin de rester centré sur son sujet. Mais cela ne signifie pas être dépourvu de toute émotion, car celles-ci peuvent être de vrais atouts. À condition de réussir à les exprimer sans accuser l'autre d'en être à l'origine.",
  tips: "Pour gérer ses émotions, il faut d'abord les identifier, notamment en analysant ses ressentis physiques et en trouvant l'élément déclencheur.",
  universalRef: 'sli_VkSQroQnx',
  id: 'sli_VkSQroQnx'
};

export const qcmGraphicUISlide: Partial<UISlide> = {
  questionText:
    'Pour mener une bonne négociation, il ne faut ressentir aucune émotion. Vrai ou faux ?',
  answerUI: {
    help: 'Sélectionnez la bonne réponse.',
    model: {
      type: 'qcmGraphic',
      answers: [
        {
          title: 'Vrai',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/true-1512554153232.jpg',
          selected: false,
          onClick: noop
        },
        {
          title: 'Faux',
          image:
            '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships/cockpit-partner-au-feminin/default/false-1512554160848.jpg',
          selected: false,
          onClick: noop
        }
      ]
    }
  }
};
