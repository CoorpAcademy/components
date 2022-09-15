import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';
import {choices, template} from '../../../template/test/fixtures/default';
import mockMobileContext from '../../../../../../test/helpers/mock-mobile-context';
import {TemplateContextValues} from '../../../../../../template/app-review/template-context';

type Fixture = {
  props: Props;
  mobileContext: TemplateContextValues;
};

const fixture: Fixture = {
  props: {
    type: 'template',
    choices,
    template,
    onInputValueChange: noop,
    onItemInputChange: noop
  },
  mobileContext: {
    ...mockMobileContext(),
    store: {
      handleFocus: () => noop,
      handleBlur: noop,
      focusedSelectId: 'foo'
    }
  }
};

export default fixture;
