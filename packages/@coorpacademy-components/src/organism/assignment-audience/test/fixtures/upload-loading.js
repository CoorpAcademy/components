import fixture from './upload-done';
import {idleUpload} from './idle';

export default {
  props: {
    ...fixture.props,
    upload: {
      ...idleUpload,
      status: 'loading',
      file: {name: 'managers-q4.xlsx', detail: 'Checking 214 logins…'},
      dropzone: {...idleUpload.dropzone, loadingLabel: 'Checking managers-q4.xlsx: 214 logins…'}
    },
    total: {label: 'Estimated audience: 0 learners'}
  }
};
