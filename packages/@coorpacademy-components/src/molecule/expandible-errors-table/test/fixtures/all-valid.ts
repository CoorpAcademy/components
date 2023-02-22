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
            icon: 'valid'
          }
        ]
      },
      {
        fields: [
          'Scorm2.zip',
          {
            icon: 'valid'
          }
        ]
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
