import noop from 'lodash/fp/noop';
import {TemplateContextValues} from '../../../../template/app-review/template-context';
import mockMobileContext from '../../../../test/helpers/mock-mobile-context';
import DropDown from '../../../questions/drop-down/test/fixtures/default';
import {Props} from '../../prop-types';

const answerProps = DropDown.props;

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
      ...answerProps,
      type: 'dropDown'
    },
    media: {
      type: 'img',
      url:
        'https://api-staging.coorpacademy.com/api-service/medias?h=300&w=300&q=90&url=https://user-images.githubusercontent.com/7602475/28273504-db1da18a-6b0e-11e7-97cd-b2e307fc51c7.png'
    },
    help: ''
  }
};

export default fixture;
