import noop from 'lodash/fp/noop';
import {TemplateContextValues} from '../../../../template/app-review/template-context';
import Template from '../../../questions/template/test/fixtures/multiple';
import mockMobileContext from '../../../../test/helpers/mock-mobile-context';
import {AnswerProps} from '../../prop-types';

type Fixture = {
  props: AnswerProps;
  mobileContext?: TemplateContextValues;
};

const answers = Template.props.answers as AnswerProps['model']['answers'];
const template = Template.props.template;

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
      type: 'template',
      template,
      answers,
    },
    help: '',
    media: {
      type: 'img',
      url: 'https://api-staging.coorpacademy.com/api-service/medias?h=400&w=400&q=90&url=https://static.coorpacademy.com/content/CoorpAcademy/content-global-exam/cockpit-global-exam/default/global-exam-profesional-exchanges-light-1589383172179.jpg'
    }
  }
};

export default fixture;
