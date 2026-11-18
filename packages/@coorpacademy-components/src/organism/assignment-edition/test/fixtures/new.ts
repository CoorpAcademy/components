import {AssignmentEditionPropsFixture} from '../../types';
import audience from '../../../assignment-audience/test/fixtures/few-populations';
import combined from '../../../assignment-audience/test/fixtures/combined';
import filled from './draft-filled';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    ...filled.props,
    information: {
      ...filled.props.information,
      field: {...filled.props.information.field, value: ''}
    },
    audience: {
      ...audience.props,
      upload: {
        ...combined.props.upload,
        subtitle: filled.props.audience.upload?.subtitle,
        status: 'idle',
        file: undefined,
        summary: undefined,
        report: undefined
      },
      individuals: {...combined.props.individuals, value: '', selected: [], suggestions: []},
      total: {label: '0 learners', detail: '0 learners (upload) + 0 learners (picked)'},
      populations: {
        ...audience.props.populations,
        options: audience.props.populations.options.map(option => ({
          ...option,
          selected: false
        }))
      }
    },
    contents: {
      ...filled.props.contents,
      checkboxWithTitle: undefined,
      actionButtons: undefined,
      list: {
        items: [],
        emptyResult: {
          title: 'No modules added yet',
          description: 'Choose the modules learners should complete.'
        }
      }
    },
    dates: {
      ...filled.props.dates,
      fields: filled.props.dates.fields.map(field => ({
        ...field,
        value: ''
      })),
      rule: {
        ...filled.props.dates.rule,
        options: filled.props.dates.rule.options.map(option => ({
          ...option,
          checked: false
        }))
      },
      reminders: {
        ...filled.props.dates.reminders,
        switches: filled.props.dates.reminders.switches.map(reminder => ({
          ...reminder,
          value: false
        }))
      }
    }
  }
};
export default fixture;
