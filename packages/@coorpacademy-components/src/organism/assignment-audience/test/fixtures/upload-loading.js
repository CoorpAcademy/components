import fixture from './upload-done';
import {idleUpload} from './idle';

export default {
  props: {
    ...fixture.props,
    upload: {
      ...idleUpload,
      status: 'loading',
      dropzone: {...idleUpload.dropzone, loadingLabel: 'Checking managers-q4.xlsx: 6 logins…'}
    },
    total: {label: 'Estimated audience: 0 learners'}
  }
};
