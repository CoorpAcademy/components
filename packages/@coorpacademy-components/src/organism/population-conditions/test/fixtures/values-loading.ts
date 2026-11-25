import {labels, makeModel, makeRow} from '../../../../test/helpers/population-conditions';

const row = makeRow();
if (row.value.kind !== 'selection') throw new Error('Expected value selection');
export default {
  props: {
    labels,
    model: makeModel({
      groups: [
        {
          id: 'values-loading',
          rows: [
            {
              ...row,
              value: {
                ...row.value,
                id: 'department-values-loading',
                suggestions: [],
                status: {kind: 'loading', message: 'Loading available values…'}
              }
            }
          ]
        }
      ]
    })
  }
};
