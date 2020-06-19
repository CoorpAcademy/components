import {defaultsDeep} from 'lodash/fp';
import RadioGroup from '../../../../atom/radio-group/test/fixtures/default';
import Default from './zero';

const types = RadioGroup.props;

export default defaultsDeep(Default, {
  props: {
    filters: [
      {
        ...types,
        type: 'radio',
        fieldName: 'contentType',
        title: 'Type:',
        onChange: value => console.log(value)
      }
    ],
    openFilters: true
  }
});
