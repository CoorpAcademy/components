import filesList from '../../../../organism/list-items/test/fixtures/files-list-overflow-hidden';

export default {
  props: {
    mode: 'list',
    onClose: () => true,
    header: {
      title: {
        title: 'Files details',
        subtitle: 'See the files you chose to upload',
        type: 'form-group'
      },
      headerIcon: 'fileZipped'
    },
    items: {
      type: 'list',
      list: filesList.props
    }
  }
};
