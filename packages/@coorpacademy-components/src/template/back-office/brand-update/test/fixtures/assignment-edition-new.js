import edition from '../../../../../organism/assignment-edition/test/fixtures/new';
import header from '../../../../../organism/header-with-actions/test/fixtures/assignment-draft';
import shell from './assignment-edition';

export default {
  props: {
    ...shell.props,
    header: {
      ...header.props,
      type: 'header-with-actions',
      title: 'New assignment',
      actionButtons: header.props.actionButtons.map(button => ({...button, disabled: true}))
    },
    content: {...edition.props, type: 'assignment-edition'}
  }
};
