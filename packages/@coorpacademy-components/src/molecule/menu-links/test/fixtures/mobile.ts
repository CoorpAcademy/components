import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Table des matières',
    numberOfDisplayedItems: 4,
    isDesktopMode: false,
    showMoreItem: {
      showMoreText: 'Voir plus',
      showLessText: 'Voir moins'
    },
    items: [
      {
        text: 'Qu’est-ce que Coorpacademy ?',
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Puis-je voir et obtenir, ou rectifier mes données ?',
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Puis-je effacer mes données ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Combien de temps allez-vous conserver mes données ?',
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Engagement de protection des données de Coorpacademy',
        isSelected: true,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Vos droits concernant le traitement des données à caractère personnel',
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      },
      {
        text: 'Notre politique en matière de cookies',
        isSelected: false,
        handleOnclick: () => console.log('onclick')
      }
    ]
  }
};
export default fixture;
