import edition from '../../../../../organism/assignment-edition/test/fixtures/draft-filled';
import header from '../../../../../organism/header-with-actions/test/fixtures/assignment-draft';
import shell from './assignment-edition';

export default {
  props: {
    ...shell.props,
    header: {
      ...header.props,
      type: 'header-with-actions',
      actionButtons: header.props.actionButtons.map(button => ({...button, disabled: false}))
    },
    content: {
      ...edition.props,
      type: 'assignment-edition',
      dates: {
        ...edition.props.dates,
        fields: edition.props.dates.fields.map((field, index) => ({
          ...field,
          value: index === 0 ? '2035-01-01' : '2035-01-31',
          min: '2035-01-01'
        }))
      }
    }
  }
};
