import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, image} = disciplineHeader.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    title,
    description: '<p><strong>Rejoignez-nous dans 17 villes en France aux formations présentielles :</strong></p><p><a href="https://www.performances.fr/gerer-emotion-contexte-professionnel.html" target="_blank">Gérer les émotions</a></p><p><a href="https://www.performances.fr/outils-gestion-stress-situation-professionnelle.html" target="_blank">Les outils de la gestion du stress</a></p><p><a href="https://www.performances.fr/formation-gestion-des-conflits.html" target="_blank">Dominer les colères et les conflits</a></p><p>L’Institut François Bocquet organise chaque année en Europe plus de mille formations en développement des talents. Plus de 150.000 professionnels ont été formés (et parfois transformés) par l\'Institut depuis 1986.</p>',
    image,
    information: {
      href: 'http://google.fr',
      socialLinks: [
        {
          type: 'facebook',
          link: 'http://www.facebook.com/pages/Elephant/146865738800649'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/7A8officiel'
        }
      ]
    },
    disciplines: take(5, products)
  }
};
