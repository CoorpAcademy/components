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
            icon: 'valid'
          }
        ]
      },
      {
        fields: [
          'Scorm2.zip',
          {
            icon: 'invalid'
          }
        ],
        'errors-table': tableOfErrors.props
      },
      {
        fields: [
          'Scorm3.zip',
          {
            icon: 'valid'
          }
        ]
      }
    ],
    ariaDescribedby: 'description-id'
  }
};
export default fixture;
