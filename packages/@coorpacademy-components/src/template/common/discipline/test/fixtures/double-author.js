import take from 'lodash/fp/take';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/default';
import disciplineRightAside from '../../../../../organism/discipline-rightaside/test/fixtures/double-author';
import disciplineScope from '../../../../../molecule/discipline-scope/test/fixtures/default';

const {title, description, video} = disciplineHeader.props;
const {rating, maxRating, linkBuy, linkTry, authors} = disciplineRightAside.props;
const {content, levels} = disciplineScope.props;

/* eslint-disable max-len */

export default {
  props: {
    selected: 2,
    popularity: rating,
    maxPopularity: maxRating,
    title,
    description,
    video,
    linkBuy,
    linkTry,
    authors,
    changeLevel: () => true,
    level: content,
    levels
  }
};
