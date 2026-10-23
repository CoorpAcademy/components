import fixture from './upload-done';
import {idleUpload} from './idle';

export default {
  props: {
    ...fixture.props,
    upload: {
      ...idleUpload,
      status: 'error',
      error: 'This file has no login column. Use the template and try again.'
    },
    total: {label: 'Estimated audience: 0 learners'}
  }
};
