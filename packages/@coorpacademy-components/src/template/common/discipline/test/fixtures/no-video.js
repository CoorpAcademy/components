import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import disciplineRightAside from '../../../../../organism/discipline-rightaside/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = disciplineHeader.props;
const {author} = disciplineRightAside.props;
const {content, levels} = disciplineScope.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    selected: 2,
    title,
    description,
    image,
    start: () => console.log('start'), // eslint-disable-line no-console
    buy: () => console.log('buy'), // eslint-disable-line no-console
    author,
    changeLevel: () => true,
    relatedDisciplines: take(3, products),
    level: content,
    levels
  }
};
