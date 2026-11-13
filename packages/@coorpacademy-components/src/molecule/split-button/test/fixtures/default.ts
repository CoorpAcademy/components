import {noop} from 'lodash/fp';
import {SplitButtonProps} from '../../types';

const fixture: {props: SplitButtonProps} = {
  props: {
    type: 'primary',
    label: 'Export XLSX',
    onClick: noop,
    menu: {
      ariaLabel: 'Choose export format',
      options: [
        {label: 'Export XLSX', onClick: noop},
        {label: 'Export CSV', onClick: noop},
        {label: 'Export TSV', onClick: noop}
      ]
    }
  }
};

export default fixture;
