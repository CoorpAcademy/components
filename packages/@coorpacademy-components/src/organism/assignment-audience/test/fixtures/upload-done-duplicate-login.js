import fixture from './upload-done-expanded';
import {rows} from './combined';

// The same login twice in one file: both rows are listed, each with its own status.
export default {
  props: {
    ...fixture.props,
    upload: {
      ...fixture.props.upload,
      file: {
        ...fixture.props.upload.file,
        detail: '7 rows · checked against logins just now'
      },
      summary: {...fixture.props.upload.summary, unknown: '2 unknown'},
      rows: [...rows, {login: 'jdoe', status: 'unknown'}]
    }
  }
};
