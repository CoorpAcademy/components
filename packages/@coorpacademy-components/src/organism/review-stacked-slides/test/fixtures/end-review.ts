import cloneDeep from 'lodash/fp/cloneDeep';
import {Props} from '../../prop-types';
import AllOkFixture from './all-ok';

type Fixture = {
  props: Props;
};

const EndReviewFixture: Fixture = cloneDeep(AllOkFixture);
EndReviewFixture.props.slides['4'].animateCorrectionPopin = false;
EndReviewFixture.props.endReview = true;

export default EndReviewFixture;
