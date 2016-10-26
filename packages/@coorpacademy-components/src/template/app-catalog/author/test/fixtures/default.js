import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import disciplineRightAside from '../../../../../organism/discipline-rightaside/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = disciplineHeader.props;
const {author} = disciplineRightAside.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    title,
    description,
    image,
    author,
    relatedDisciplines: take(3, products)
  }
};
