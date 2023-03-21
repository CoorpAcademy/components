import {Props} from '../../types';

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
            icon: 'valid',
            componentType: 'status'
          }
        ]
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
