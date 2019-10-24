import heroCardFixtures from '../../../../../molecule/card/test/fixtures/hero';
import Default from './default';

const {props} = Default;

export default {
  props: {
    ...props,
    hero: heroCardFixtures.props
  }
};
