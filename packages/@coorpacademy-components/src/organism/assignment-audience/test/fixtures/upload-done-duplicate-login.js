import fixture from './upload-done-expanded';
import {rows} from './combined';

// The same login twice in one file: both rows are listed, each with its own status.
export default {
  props: {
    ...fixture.props,
    upload: {
      ...fixture.props.upload,
      rows: [...rows, {login: 'jdoe', status: 'unknown'}]
    }
  }
};
