import type {SlideFromAPI} from '@coorpacademy/review-services';

export const createQcmSlide = (
  universalRef: string,
  medias?: SlideFromAPI['question']['medias']
): SlideFromAPI => ({
  question: {
    medias: medias || [
      {
        type: 'audio',
        src: [
          {
            mimeType: 'audio/acc',
            url: '//static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac',
            _id: '590b9be24f7b862e0046e577'
          }
        ]
      }
    ],
    content: {
      media: {
        src: [],
        posters: [],
        subtitles: []
      },
      choices: [
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62c853412d0f9b088718e759',
          label: 'Le créateur peut fixer un pourcentage pour chaque transaction future',
          value: 'sli_N1XACJobn.choice_4JjaSesZh',
          id: '62c853412d0f9b088718e759'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62c853412d0f9b088718e75a',
          label:
            "Pour chaque transaction il existe un pourcentage fixe déterminé par le droit d'auteur du pays où se tient la vente",
          value: 'sli_N1XACJobn.choice_Ny78UlsWh',
          id: '62c853412d0f9b088718e75a'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62c853412d0f9b088718e75b',
          label:
            "Seule la galerie ou la plateforme peut toucher une commission sur la vente d'un NFT",
          value: 'sli_N1XACJobn.choice_Eypt8esW2',
          id: '62c853412d0f9b088718e75b'
        },
        {
          media: {
            src: [],
            posters: [],
            subtitles: []
          },
          items: [],
          _id: '62c853412d0f9b088718e75c',
          label: "Les NFT payés en ETH ne peuvent pas être soumis au paiement d'une commission",
          value: 'sli_N1XACJobn.choice_VyS3LxjZh',
          id: '62c853412d0f9b088718e75c'
        }
      ],
      answers: [['Le créateur peut fixer un pourcentage pour chaque transaction future']]
    },
    type: 'qcm',
    header: "Après la vente d'un NFT, son créateur peut-il toucher de l'argent ?",
    explanation: 'Sélectionnez la bonne réponse.'
  },
  klf: 'Si vous êtes le créateur d’un NFT, vous pouvez choisir le pourcentage de commission pour chaque transaction de votre NFT.  Certains choisissent de ne rien toucher pour fluidifier le marché.',
  tips: 'En 2021, le média en ligne Numerama a créé un NFT vendu aux enchères sur OpenSea. Sur cette plateforme, il est obligatoire de mettre un prix de réserve, autrement dit un prix minimum au-dessous duquel la vente ne sera pas automatiquement acceptée. Sur OpenSea il ne peut être inférieur à 1 ETH. Si le prix de réserve est atteint, pas de problème, les "gas fees" (les frais de gaz) sont couverts par OpenSea. Mais, si ce n’est pas le cas, c’est au vendeur de s’en acquitter. <br/>Le NFT en question est parti à 0,021 ETH, soit 40€ au cours de l\'époque, un prix inférieur au prix de réserve. Numerama a dû acquitter des frais de gaz, et payer 190 €. <br/>Avec les NFT, on ne gagne pas à tous les coups.',
  universalRef,
  hasClue: true,
  _id: universalRef,
  parentContentTitle: {
    title: 'Developing the review app',
    type: 'course'
  }
});
