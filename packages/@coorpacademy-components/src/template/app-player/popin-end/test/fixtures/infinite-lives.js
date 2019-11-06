import {defaultsDeep} from 'lodash/fp';
import loading from './loading';
import defaultFixture from './default';

export default defaultsDeep(loading, {
  props: {
    ...defaultFixture,
    header: {
      ...defaultFixture.props.header,
      lives: {
        count: null
      }
    }
  }
});
