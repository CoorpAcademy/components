import back from '../../../../../atom/button-link-icon-only/test/fixtures/back';
import PrivacyPolicyContact from '../../../../../molecule/privacy-policy-contact/test/fixtures/default';
import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    title: 'Comment me repérer sur la page d’accueil ?',
    subArticles: [
      {
        subTitle: 'Qu’est-ce que Coorpacademy ?',
        text: `La page d’accueil est celle sur laquelle vous arrivez une fois que vous êtes connecté. C’est vers cette page que vous serez redirigé dès que vous aurez fini un cours. Elle est toujours accessible où que l’on soit sur la plateforme, en cliquant sur le logo en haut à gauche.
    Vous pouvez aussi suivre l’actualité de votre plateforme grâce aux “News”.`,
        image:
          'https://media.stonly.com/media/images/6069807d-df90-4498-b629-7c55ab166654.png?s=982edbf27a6ad2c9d26e78338f900f9081c01ca981a936f65a827aa72786b1befe75d3494389acba3a257c36cb6fc17b0a905ebfb1135f3a207641ed25abed998835f3b0e1ac027e8e2aba161ee6727749d91c571415fddb9d5bf2354cfcd80622da65e295992a7b47b77319bb84875b&w=1280&h=1440&auto=format&dpr=1'
      },
      {
        subTitle: 'Quel type de données recueillez-vous à mon sujet et pourquoi ?',
        text: `Sous la bannière principale, vous trouverez différents blocs selon l'option d'affichage. Une sélection de cours vous est proposée, ils sont classés dans différentes sections : choisissez ce qui vous intéresse le plus !
        Quelques exemples de sections :
        <ul><li>Section « Recommandés pour vous » : les cours sont suggérés individuellement suivant un algorithme analysant votre comportement lors de vos dernières formations.</li>
        <li>Section « Nouveautés », où les nouveaux cours sont mis en avant quelque soit leur thème</li>
        <li>Section par compétences, qui présente tous les cours appartenant à une compétence. Exemple : “Leadership & Management” ou “Culture Digitale”</li></ul>
    Vous pouvez aussi suivre l’actualité de votre plateforme grâce aux “News”.`,
        image:
          'https://media.stonly.com/media/images/10576b96-c1ac-494a-bcf4-70b64e489b0e.png?s=fcf8e3b19eb4e73efdc983c5a533fde4449d6d0343c40e2d8f1453b13981fb0d49cb34ce1ebd5f1b240c14cb18f5b89fb8cecdb085d681432a31187ae721c18ca836a0120f02f1b5cb4bbff5b5e2164be16590c7663cd89051104f87e8c5bcea852816f65e895a22bb22f4d63445c77b&w=1280&h=1440&auto=format&dpr=1'
      },
      {
        subTitle: 'Lancer des battles',
        text: `Vous pourrez lancer des battles en cliquant sur le bandeau "Créer une nouvelle battle"`,
        image:
          'https://media.stonly.com/media/images/0887cae1-5eb3-409b-b9f0-ab9955e8f3e2.png?s=fcf8e3b19eb4e73efdc983c5a533fde4449d6d0343c40e2d8f1453b13981fb0d49cb34ce1ebd5f1b240c14cb18f5b89fb8cecdb085d681432a31187ae721c18cc8fd7e2032fe8bb4f124b8a461d3d05a4be97e679dc650a14ce77e74fbd69a0d852816f65e895a22bb22f4d63445c77b&w=1280&h=1440&auto=format&dpr=1'
      }
    ],
    privacyPolicyContact: PrivacyPolicyContact.props,
    backButtonText: 'Retour aux guides',
    backButton: back.props
  }
};
export default fixture;
