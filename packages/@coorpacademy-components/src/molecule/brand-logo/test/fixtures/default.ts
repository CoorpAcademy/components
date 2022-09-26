import {TemplateContextValues} from '../../../../template/app-review/template-context';
import mockMobileContext from '../../../../test/helpers/mock-mobile-context';
import {Props} from '../../index.native';

type Fixture = {
  props: Props;
  mobileContext?: TemplateContextValues;
};

const fixture: Fixture = {
  mobileContext: {
    ...mockMobileContext()
  },
  props: {
    height: 37
  }
};

export default fixture;
