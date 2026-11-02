import {AssignmentEditionPropsFixture} from '../../types';
import empty from './new';

// A new form after a Publish attempt: each error sits on its own field, as on Skills.
const fixture: AssignmentEditionPropsFixture = {
  props: {
    ...empty.props,
    information: {
      ...empty.props.information,
      field: {
        ...empty.props.information.field,
        value: 'az',
        error: 'Enter a title of 3–100 characters.'
      }
    },
    audience: {...empty.props.audience, error: 'Choose an audience.'},
    contents: {...empty.props.contents, error: 'Add at least one content.'},
    dates: {
      ...empty.props.dates,
      fields: empty.props.dates.fields.map(field => ({
        ...field,
        value: '',
        error: 'Choose a start and an end date.'
      })),
      rule: {
        ...empty.props.dates.rule,
        options: empty.props.dates.rule.options.map(option => ({...option, checked: false})),
        error: 'Choose a completion rule.'
      }
    }
  }
};
export default fixture;
