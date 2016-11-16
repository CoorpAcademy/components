import Download from '../../../../molecule/brand-download-box/test/fixtures/default';
import Upload from '../../../../molecule/brand-upload-box/test/fixtures/default';

const success = {
  type: 'success',
  message: 'user foo ok'
};

const error = {
  type: 'error',
  message: 'user bar error line 5'
};

export default {
  props: {
    title: 'Import users list',
    download: Download.props,
    upload: Upload.props,
    notifications: [
      success,
      success,
      success,
      error,
      error,
      error,
      error,
      error,
      success,
      error
    ]
  }
};
