import {map} from 'lodash/fp';
import {FilterChipProps} from '../../prop-types';
import noSelectedProps from './no-selected';

const props: FilterChipProps = {
  props: {
    title: 'Type',
    onClear: () => console.log('click on clear button'),
    options: map(p => ({...p, selected: true}), noSelectedProps.props.options)
  }
};

export default props;
