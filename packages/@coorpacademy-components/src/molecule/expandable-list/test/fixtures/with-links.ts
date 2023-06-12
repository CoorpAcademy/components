import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    items: [
      {
        title: 'Qu’est-ce que Coorpacademy ?',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Puis-je voir et obtenir, ou rectifier mes données ?',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Puis-je effacer mes données ?',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Combien de temps allez-vous conserver mes données ?',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Engagement de protection des données de Coorpacademy',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Vos droits concernant le traitement des données à caractère personnel',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      },
      {
        title: 'Notre politique en matière de cookies',
        icon: 'arrow',
        isExpended: false,
        isLink: true,
        content: '',
        onClick: () => console.log('onClick')
      }
    ]
  }
};
export default fixture;
