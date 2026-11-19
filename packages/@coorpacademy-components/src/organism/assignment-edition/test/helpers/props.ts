import cloneDeep from 'lodash/fp/cloneDeep';
import {AssignmentEditionProps} from '../../types';
import audience from '../../../assignment-audience/test/fixtures/combined';
import contents from '../../../content-selection-list/test/fixtures/hidden-row';

export const makeProps = (): AssignmentEditionProps => ({
  requiredFieldsHint:
    'Fields marked with * are required to **save a draft**. All fields are required to **publish**.',
  information: {
    title: 'Assignment title',
    subtitle: 'Name this assignment',
    field: {
      title: 'Assignment title',
      hint: 'Enter a title of 3–100 characters.',
      value: 'Safety onboarding',
      onChange: () => undefined
    }
  },
  audience: {
    ...cloneDeep(audience.props),
    upload: {...audience.props.upload, status: 'done'}
  },
  contents: cloneDeep(contents.props),
  dates: {
    title: 'Dates',
    fields: [
      {
        title: 'Start date',
        name: 'start',
        value: '2026-11-03',
        min: '2026-11-01',
        hint: 'Start in GMT',
        suffix: 'GMT',
        onChange: () => undefined
      },
      {
        title: 'End date',
        name: 'end',
        value: '2026-12-03',
        min: '2026-11-03',
        hint: 'End in GMT',
        suffix: 'GMT',
        onChange: () => undefined
      }
    ],
    rule: {
      title: 'Completion rule',
      options: [
        {
          title: {title: 'All modules', subtitle: 'Complete every module'},
          checked: false,
          example: 'Example: two of two',
          onChange: () => undefined
        },
        {
          title: {title: 'Any module', subtitle: 'Complete one module'},
          checked: false,
          example: 'Example: one of two',
          onChange: () => undefined
        }
      ]
    },
    reminders: {
      title: 'Notifications',
      hint: 'Reminders are sent in GMT',
      switches: [
        {
          title: 'Send reminders',
          'aria-label': 'Send reminders',
          value: true,
          onChange: () => undefined
        }
      ]
    }
  }
});
