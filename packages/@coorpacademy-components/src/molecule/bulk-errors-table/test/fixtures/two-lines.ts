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
        fields: [
          'Description',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
        ]
      }
    ],
    descriptionId: 'description-id'
  }
};
export default fixture;
