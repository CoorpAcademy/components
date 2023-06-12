import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
    icon: 'arrow',
    isExpended: false,
    isLink: false,
    content: '',
    onClick: () => console.log('onClick')
  }
};
export default fixture;
