import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
    icon: 'arrow',
    isExpended: true,
    isLink: false,
    content: `<span>La page d’accueil est celle sur laquelle vous arrivez une fois que vous êtes connecté. C’est vers cette page que vous serez redirigé dès que vous aurez fini un cours. Elle est toujours accessible où que l’on soit sur la plateforme, en cliquant sur le logo en haut à gauche.
    Vous pouvez aussi suivre l’actualité de votre plateforme grâce aux “News”.</span>`,
    image: 'https://static.coorpacademy.com/site/img_go1_banner2 1.png',
    onClick: () => console.log('onClick')
  }
};
export default fixture;
