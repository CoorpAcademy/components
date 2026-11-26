import {labels, makeModel, makeRow} from '../../../../test/helpers/population-conditions';

const row = makeRow();
if (row.value.kind !== 'selection') throw new Error('Expected value selection');
export default {
  props: {
    labels,
    model: makeModel({
      groups: [
        {
          id: 'values-empty',
          rows: [
            {
              ...row,
              value: {
                ...row.value,
                id: 'department-values-empty',
                suggestions: [],
                status: {
                  kind: 'empty',
                  message: 'No suggestions. Type a value to add it explicitly.'
                }
              }
            }
          ]
        }
      ]
    })
  }
};
