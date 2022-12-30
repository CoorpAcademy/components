import slides from '../../player/test/fixtures/initial-state';
import {AppReviewProps} from '../../prop-types';
import mockMobileContext from '../../../../test/helpers/mock-mobile-context';
import {TemplateContextValues} from '../../template-context';

type Fixture = {
  props: AppReviewProps;
  mobileContext?: TemplateContextValues;
};

const fixture: Fixture = {
  mobileContext: mockMobileContext(),
  props: {
    slides: slides.props,
    viewName: 'slides'
  }
};

export default fixture;
