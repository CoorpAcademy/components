import {noop} from 'lodash/fp';
import {labels, makeModel, makeRow} from '../../../../test/helpers/population-conditions';

const row = makeRow();
if (row.value.kind !== 'selection') throw new Error('Expected value selection');
export default {
  props: {
    labels,
    model: makeModel({
      groups: [
        {
          id: 'values-error',
          rows: [
            {
              ...row,
              value: {
                ...row.value,
                status: {
                  kind: 'error',
                  message: 'Values could not be loaded. Your selection is kept.',
                  onRetry: noop
                }
              }
            }
          ]
        }
      ]
    })
  }
};
