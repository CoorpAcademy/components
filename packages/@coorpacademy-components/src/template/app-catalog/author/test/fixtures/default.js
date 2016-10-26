import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = disciplineHeader.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    title,
    description,
    image,
    information: {
      href: 'http://google.fr',
      socialLinks: [
        {
          ref: 'facebook',
          link: 'http://www.facebook.com/pages/Elephant/146865738800649'
        },
        {
          ref: 'twitter',
          link: 'https://twitter.com/7A8officiel'
        }
      ]
    },
    disciplines: take(5, products)
  }
};
