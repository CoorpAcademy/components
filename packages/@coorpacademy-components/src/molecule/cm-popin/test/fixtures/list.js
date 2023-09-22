import filesList from '../../../../organism/list-items/test/fixtures/files-list';

export default {
  props: {
    mode: 'list',
    onClose: () => true,
    cookieTitle: 'Files details',
    header: {
      title: {
        title: 'Files details',
        subtitle: 'See the files you chose to upload',
        type: 'form-group'
      },
      headerIcon: 'file'
    },
    items: {
      type: 'list',
      list: filesList.props
    }
  }
};
