import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    columns: [],
    emptyStateFistMessage: "There's nothing here",
    emptyStateSecondMessage: 'No content tagged as success'
  }
};
export default fixture;
