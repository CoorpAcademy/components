import {Props} from '../../types';
import tableOfErrors from '../../../errors-table/test/fixtures/default';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [{title: 'File name'}, {title: 'Status'}],
    rows: [
      {
        fields: [
          'Scorm1.zip',
          {
            icon: 'valid',
            componentType: 'status'
          }
        ]
      },
      {
        fields: [
          'Scorm2.zip',
          {
            icon: 'invalid',
            componentType: 'status'
          }
        ],
        nestedRow: {
          ...tableOfErrors.props,
          componentType: 'errors-table'
        },
        isRowExpandible: true
      },
      {
        fields: [
          'Scorm3.zip',
          {
            icon: 'valid',
            componentType: 'status'
          }
        ]
      }
    ],
    columnWidth: '20%',
    ariaDescribedby: 'description-id'
  }
};
export default fixture;
