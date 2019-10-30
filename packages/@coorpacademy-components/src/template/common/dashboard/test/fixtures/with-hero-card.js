import heroCardFixtures from '../../../../../molecule/hero/test/fixtures/hero';
import Default from './default';

const {props} = Default;

export default {
  props: {
    ...props,
    hero: heroCardFixtures.props
  }
};
