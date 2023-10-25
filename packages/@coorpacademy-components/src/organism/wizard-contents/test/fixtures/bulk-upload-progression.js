import UploadingFileProgress from '../../../../molecule/bulk-infos/test/fixtures/progress';

export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'New import',
      onClick: () => console.log('Close')
    },
    content: {
      ...UploadingFileProgress.props,
      key: 'upload-progression',
      type: 'upload-progression'
    }
  }
};
