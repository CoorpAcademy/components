import cloneDeep from 'lodash/fp/cloneDeep';
import AllOkFixture from './all-ok';

const EndReviewFixture = cloneDeep(AllOkFixture);
EndReviewFixture.props.uiSlides['4'].animateCorrectionPopin = false;
EndReviewFixture.props.endReview = true;

export default EndReviewFixture;
