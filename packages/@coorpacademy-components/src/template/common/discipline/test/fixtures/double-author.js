import defaultsDeep from 'lodash/fp/defaultsDeep';
import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures//more-info';
import disciplineCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import Default from './default';

const {props} = Default;
const {rating, maxRating} = disciplineCTA.props;
const {authors} = disciplinePartners.props;

export default {
  props: defaultsDeep(props, {
    popularity: rating,
    maxPopularity: maxRating,
    authors
  })
};
