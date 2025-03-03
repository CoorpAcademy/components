import {map} from 'lodash/fp';
import noSelectedProps from './no-selected';

export default {
  props: {
    options: map(p => ({...p, selected: true}), noSelectedProps.props.options)
  }
};
