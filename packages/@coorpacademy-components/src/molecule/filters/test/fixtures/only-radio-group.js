import defaultsDeep from 'lodash/fp/defaultsDeep';
import RadioGroup from '../../../../atom/radio-group/test/fixtures/default';
import Default from './zero';

const types = RadioGroup.props;

export default defaultsDeep(Default, {
  props: {
    filters: [
      {
        type: 'radio',
        fieldName: 'contentType',
        ...types,
        title: 'Type:',
        onChange: value => console.log(value)
      }
    ],
    openFilters: true
  }
});
