import disciplinePartners from '../../../../../molecule/discipline-partners/test/fixtures/more-info';
import externalCourseCTA from '../../../../../molecule/discipline-cta/test/fixtures/default';
import disciplineHeader from '../../../../../molecule/discipline-header/test/fixtures/jwplayer';
import Default from './default';

const {props} = Default;
const {rating, maxRating} = externalCourseCTA.props;
const {authors} = disciplinePartners.props;
const {video} = disciplineHeader.props;
export default {
  props: {
    ...props,
    popularity: rating,
    maxPopularity: maxRating,
    authors,
    buy: null,
    buyLabel: null,
    video,
    levels: [],
    level: {...props.content, title: null}
  }
};
