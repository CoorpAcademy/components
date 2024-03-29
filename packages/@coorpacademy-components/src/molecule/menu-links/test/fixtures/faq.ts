import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Table des matières',
    numberOfDisplayedItems: 4,
    isDesktopMode: true,
    showMoreItem: {
      showMoreText: 'Voir plus',
      showLessText: 'Voir moins'
    },
    items: [
      {
        text: 'Qu’est-ce que Coorpacademy ?',
        isSelected: true,
        handleOnclick: () => console.log('onclick'),
        icon: 'mobilePhone',
        ariaLabel: 'Ouvrir la liste des articles du sujet Qu’est-ce que Coorpacademy ?'
      },
      {
        text: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        ariaLabel:
          'Ouvrir la liste des articles du sujet Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick'),
        icon: 'chatBubbleCircleQuestionMark'
      },
      {
        text: 'Puis-je voir et obtenir, ou rectifier mes données ?',
        ariaLabel:
          'Ouvrir la liste des articles du sujet Puis-je voir et obtenir, ou rectifier mes données ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick'),
        icon: 'networkAlert'
      },
      {
        text: 'Puis-je effacer mes données ?',
        ariaLabel: 'Ouvrir la liste des articles du sujet Puis-je effacer mes données ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick'),
        icon: 'binoculaire'
      },
      {
        text: 'Combien de temps allez-vous conserver mes données ?',
        ariaLabel:
          'Ouvrir la liste des articles du sujet Combien de temps allez-vous conserver mes données ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick'),
        icon: 'contentBook'
      }
    ]
  }
};
export default fixture;
