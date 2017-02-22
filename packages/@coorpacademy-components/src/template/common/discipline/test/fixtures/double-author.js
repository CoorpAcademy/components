import defaultsDeep from 'lodash/fp/defaultsDeep';
import disciplineRightAside from '../../../../../organism/discipline-rightaside/test/fixtures/double-author';
import Default from './default';

const {props} = Default;
const {rating, maxRating, linkBuy, linkTry, authors} = disciplineRightAside.props;

export default {
  props: defaultsDeep(props, {
    popularity: rating,
    maxPopularity: maxRating,
    authors
  })
};
