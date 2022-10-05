import FreeText from '../../../questions/free-text/test/fixtures/default';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    model: {
      ...FreeText.props,
      type: 'freeText'
    },
    media: {
      type: 'audio',
      mediaUrl:
        'https://static.coorpacademy.com/content/CoorpAcademy/content-bnpp/cockpit-letsgetdigital-migration/raw/sample-1618502603227.aac'
    },
    help: ''
  }
};

export default fixture;
