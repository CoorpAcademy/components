import popinWithCards from '../../../../../molecule/cm-popin/test/fixtures/popin-with-cards';
import cookieProps from '../../../../../molecule/cm-popin/test/fixtures/cookie';
import Default from './default';

export default {
  props: {
    ...Default.props,
    cookie: cookieProps.props,
    popinWithCards: popinWithCards.props
  }
};
