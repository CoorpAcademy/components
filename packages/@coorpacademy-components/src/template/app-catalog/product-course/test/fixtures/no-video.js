import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/no-video';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/default';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/default';
import catalogCards from '../../../../../organism/catalog-cards/test/fixtures/default';

const {title, description, image} = disciplineHeader.props;
const {rating, maxRating, linkBuy, linkTry} = disciplineCTA.props;
const {authors} = disciplinePartners.props;
const {content, levels} = disciplineScope.props;
const {products} = catalogCards.props;

/* eslint-disable max-len */

export default {
  props: {
    selected: 2,
    popularity: rating,
    maxPopularity: maxRating,
    title,
    description,
    image,
    linkBuy,
    linkTry,
    authors,
    changeLevel: () => true,
    relatedDisciplines: take(3, products),
    level: content,
    levels
  }
};
