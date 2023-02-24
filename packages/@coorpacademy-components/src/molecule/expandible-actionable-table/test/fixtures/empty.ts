import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [
      {
        title: 'File name'
      },
      {
        title: 'Author'
      },
      {
        title: 'Creation Date'
      },
      {
        title: 'Total files'
      },
      {
        title: 'Total Errors'
      }
    ]
  }
};
export default fixture;
