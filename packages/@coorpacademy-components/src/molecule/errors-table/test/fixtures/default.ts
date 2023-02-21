import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [{title: 'Error Type'}, {title: 'Error Description'}],
    rows: [
      {
        fields: ['Zip file', 'Scorm Type error']
      },
      {
        fields: ['Description', 'should not be empty']
      }
    ],
    ariaDescribedby: 'description-id'
  }
};
export default fixture;
