import filesList from '../../../../organism/list-items/test/fixtures/files-list';

export default {
  props: {
    mode: 'filesDetails',
    onClose: () => true,
    cookieTitle: 'Files details',
    headerSubtitle: 'See the files you chose to upload',
    filesList: filesList.props
  }
};
