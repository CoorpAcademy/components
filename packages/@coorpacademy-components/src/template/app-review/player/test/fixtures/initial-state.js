import omit from 'lodash/fp/omit';
import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import congratsProps from '../../../../../organism/review-congrats/test/fixtures/default';
import AnswerQCMDrag from '../../../../../molecule/answer/test/fixtures/qcm-drag';

const qcmDrag = AnswerQCMDrag.props;

export const apiQCMSlide0 = {
  question: {
    content: {
      choices: [
        {
          items: [],
          _id: '62c853412d0f9b088718e759',
          label: 'Le créateur peut fixer un pourcentage pour chaque transaction future',
          value: 'sli_N1XACJobn.choice_4JjaSesZh',
          id: '62c853412d0f9b088718e759'
        },
        {
          items: [],
          _id: '62c853412d0f9b088718e75a',
          label:
            "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente",
          value: 'sli_N1XACJobn.choice_Ny78UlsWh',
          id: '62c853412d0f9b088718e75a'
        },
        {
          items: [],
          _id: '62c853412d0f9b088718e75b',
          label:
            "Seule la galerie ou la plateforme peut toucher une commission sur la vente d'un NFT",
          value: 'sli_N1XACJobn.choice_Eypt8esW2',
          id: '62c853412d0f9b088718e75b'
        },
        {
          items: [],
          _id: '62c853412d0f9b088718e75c',
          label: "Les NFT payés en ETH ne peuvent pas être soumis au paiement d'une commission",
          value: 'sli_N1XACJobn.choice_VyS3LxjZh',
          id: '62c853412d0f9b088718e75c'
        }
      ]
    },
    type: 'qcm',
    header: "Après la vente d'un NFT, son créateur peut-il toucher de l'argent ?",
    explanation: 'Sélectionnez la bonne réponse.'
  },
  klf:
    'Si vous êtes le créateur d’un NFT, vous pouvez choisir le pourcentage de commission pour chaque transaction de votre NFT.  Certains choisissent de ne rien toucher pour fluidifier le marché.',
  tips:
    'En 2021, le média en ligne Numerama a créé un NFT vendu aux enchères sur OpenSea. Sur cette plateforme, il est obligatoire de mettre un prix de réserve, autrement dit un prix minimum au-dessous duquel la vente ne sera pas automatiquement acceptée. Sur OpenSea il ne peut être inférieur à 1 ETH. Si le prix de réserve est atteint, pas de problème, les "gas fees" (les frais de gaz) sont couverts par OpenSea. Mais, si ce n’est pas le cas, c’est au vendeur de s’en acquitter. <br/>Le NFT en question est parti à 0,021 ETH, soit 40€ au cours de l\'époque, un prix inférieur au prix de réserve. Numerama a dû acquitter des frais de gaz, et payer 190 €. <br/>Avec les NFT, on ne gagne pas à tous les coups.',
  universalRef: 'sli_N1XACJobn',
  hasClue: true,
  id: 'sli_N1XACJobn'
};

export const correctionPopinProps = {
  klf: {
    label: 'Key learning factor',
    tooltip: 'Some tooltip info.',
    onClick: () => {
      console.log('klf onClick');
    }
  },
  information: {
    label: 'Key learning factor',
    message: 'info msg'
  },
  next: {
    label: 'Next'
  },
  successLabel: 'CORRECT ANSWER',
  failureLabel: 'WRONG ANSWER'
};

export default {
  props: {
    headerProps: omit('steps', headerProps.props),
    reviewBackgroundAriaLabel: 'review BG Aria',
    validate: {
      label: 'Validate'
    },
    apiSlides: {
      slideRefs: ['sli_N1XACJobn'],
      values: {
        sli_N1XACJobn: apiQCMSlide0
      }
    },
    uiSlides: {
      '0': {
        hidden: false,
        position: 0,
        questionText: 'Hey there, .....suspense.... ready to select some answers?',
        answerUI: qcmDrag
      },
      '1': {
        hidden: false,
        position: 1
      },
      '2': {
        hidden: false,
        position: 2
      },
      '3': {
        hidden: false,
        position: 3
      },
      '4': {
        hidden: false,
        position: 4
      }
    },
    finishedSlides: {},
    stepItems: {
      '0': {
        current: true,
        value: '1',
        icon: 'no-answer'
      },
      '1': {
        current: false,
        value: '2',
        icon: 'no-answer'
      },
      '2': {
        current: false,
        value: '3',
        icon: 'no-answer'
      },
      '3': {
        current: false,
        value: '4',
        icon: 'no-answer'
      },
      '4': {
        current: false,
        value: '5',
        icon: 'no-answer'
      }
    },
    reviewStatus: 'ongoing',
    correctionPopinProps,
    congratsProps: congratsProps.props,
    progression: {
      _id: '62b1d1087aa12f00253f40ee',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'slide',
          ref: 'sli_N1XACJobn'
        }
      }
    },
    // ---------------
    // Dispatchers
    validateSlide: () => console.log('onValidateClick'),
    updateSlidesOnNext: () => console.log('updateSlidesOnNext'),
    updateReviewStatus: () => console.log('updateReviewStatus'),
    updateStepItemsOnValidation: () => console.log('updateStepItemsOnValidation'),
    updateStepItemsOnNext: () => console.log('updateStepItemsOnNext'),
    updateFinishedSlides: () => console.log('updateFinishedSlides')
  }
};
