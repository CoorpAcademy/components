import Download from '../../../../molecule/brand-download-box/test/fixtures/default';
import DownloadOneLoginTokens from '../../../../molecule/brand-download-box/test/fixtures/download-one-login-tokens';
import Upload from '../../../../molecule/brand-upload-box/test/fixtures/default';

const success = {
  type: 'success',
  message: 'user foo ok'
};

const warning = {
  type: 'warning',
  message: 'warning line 5'
};

const error = {
  type: 'error',
  message: 'user bar error line 5'
};

export default {
  props: {
    title: 'Import users list',
    oneLoginTokens: {
      title: 'Download one login token',
      download: DownloadOneLoginTokens.props
    },
    back: {
      desc: 'Back to users list',
      link: '/TemplateBackOffice/BrandUpdate/UsersList'
    },
    download: Download.props,
    upload: Upload.props,
    notifications: [
      success,
      warning,
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
