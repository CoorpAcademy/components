import cloneDeep from 'lodash/fp/cloneDeep';
import AllOkFixture from './all-ok';

const EndReviewFixture = cloneDeep(AllOkFixture);
EndReviewFixture.props.slides['4'].animateCorrectionPopin = false;
EndReviewFixture.props.endReview = true;

export default EndReviewFixture;
