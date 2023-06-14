import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Table des matières',
    numberOfDisplayedItems: 4,
    isDesktopMode: true,
    withScroll: true,
    showMoreItem: {
      showMoreText: 'Voir plus',
      showLessText: 'Voir moins'
    },
    items: [
      {
        text: 'Qu’est-ce que Coorpacademy ?',
        ariaLabel: "Descendre jusqu'à la section de la question : Qu’est-ce que Coorpacademy ?",
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Quel type de données recueillez-vous à mon sujet et pourquoi ?",
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Puis-je voir et obtenir, ou rectifier mes données ?',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Puis-je voir et obtenir, ou rectifier mes données ?",
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Puis-je effacer mes données ?',
        ariaLabel: "Descendre jusqu'à la section de la question : Puis-je effacer mes données ?",
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Combien de temps allez-vous conserver mes données ?',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Combien de temps allez-vous conserver mes données ?",
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Engagement de protection des données de Coorpacademy',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Engagement de protection des données de Coorpacademy",
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Vos droits concernant le traitement des données à caractère personnel',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Vos droits concernant le traitement des données à caractère personnel",
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Notre politique en matière de cookies',
        ariaLabel:
          "Descendre jusqu'à la section de la question : Notre politique en matière de cookies",
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      }
    ]
  }
};
export default fixture;
