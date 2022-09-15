import noop from 'lodash/fp/noop';
import {TemplateContextValues} from '../../../../template/app-review/template-context';
import Template from '../../../questions/template/test/fixtures/multiple';
import mockMobileContext from '../../../../test/helpers/mock-mobile-context';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
  mobileContext: TemplateContextValues;
};

const fixture: Fixture = {
  mobileContext: {
    ...mockMobileContext(),
    store: {
      handleFocus: () => noop,
      handleBlur: noop,
      focusedSelectId: ''
    }
  },
  props: {
    model: {
      ...Template.props,
      type: 'template'
    },
    media: {
      type: 'img',
      url:
        'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=http://europeantrips.org/wp-content/uploads/2012/03/Eiffel-Tower.jpg'
    }
  }
};

export default fixture;
