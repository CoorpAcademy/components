import {ContentPropsType} from '../../types';
import {contentData} from '../../../skill-edition/test/fixtures/draft';

const props: ContentPropsType = {
  title: 'Contents',
  button: {label: 'Add content', onClick: () => console.log('Add content')},
  checkboxWithTitle: {
    title: '2 items',
    checked: false,
    onChange: checked => console.log('Select all', checked)
  },
  actionButtons: [
    {label: 'Delete', type: 'secondary', onClick: () => console.log('Delete selected')}
  ],
  list: {
    items: [
      {...contentData[0], title: 'Cloud computing fundamentals', subtitle: 'Digital skills'},
      {...contentData[1], title: 'Understanding cloud security', subtitle: 'Cybersecurity'}
    ].map(item => ({
      ...item,
      tags: {label: 'Module', iconName: 'book-open'},
      deleteButton: {onClick: () => console.log('Delete', item.ref)}
    }))
  }
};

export default {props};
