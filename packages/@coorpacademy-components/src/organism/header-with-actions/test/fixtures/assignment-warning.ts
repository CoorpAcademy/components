import {noop} from 'lodash/fp';
import {HeaderWithActionsPropsFixture} from '../../types';
import draft from './assignment-draft';

const fixture: HeaderWithActionsPropsFixture = {
  props: {
    ...draft.props,
    warning: {label: '2 content items unavailable', onClick: noop}
  }
};

export default fixture;
