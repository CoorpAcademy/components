import {Props} from '../../index.native';
import {uri} from './default';

type Fixture = {props: Props};

const fixture: Fixture = {
  props: {
    source: {uri},
    style: {width: 200, height: 200},
    resizeMode: 'contain'
  }
};

export default fixture;
