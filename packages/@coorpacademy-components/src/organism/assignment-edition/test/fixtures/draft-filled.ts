import {AssignmentEditionPropsFixture} from '../../types';
import combined from '../../../assignment-audience/test/fixtures/combined';
import assignment from '../../../content-selection-list/test/fixtures/assignment';
import date from '../../../../molecule/brand-form-group/test/fixtures/date';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    requiredFieldsHint:
      'Fields marked with * are required to save a draft. All fields are required to publish.',
    information: {
      title: 'Assignment title',
      subtitle: 'Only managers see this. It is never translated and never shown to learners.',
      field: {
        title: 'Title',
        hint: 'Enter a title of 3–100 characters.',
        value: 'Safety onboarding',
        onChange: value => console.log(value)
      }
    },
    audience: {
      ...combined.props,
      upload: {
        ...combined.props.upload,
        status: 'done',
        subtitle:
          'One login column. xlsx, xls or csv, up to 5000 rows. Logins for accounts not found or deactivated are reported before you save.',
        file: {
          name: 'safety-onboarding-learners.xlsx',
          detail: '5 rows · checked against logins just now'
        },
        summary: {
          valid: '3 added',
          unknown: '1 account(s) not found or do not exist',
          inactive: '1 deactivated account(s), skipped'
        }
      }
    },
    contents: assignment.props,
    dates: {
      title: 'Dates',
      fields: [
        {
          ...date.props.fields[0],
          type: 'date',
          title: 'Start date',
          value: '2026-11-03',
          suffix: '',
          hint: undefined
        },
        {
          title: 'End date',
          name: 'assignmentEnd',
          value: '2026-12-03',
          min: '2026-11-03',
          suffix: '',
          onChange: value => console.log(value)
        }
      ],
      rule: {
        title: 'Completion rule',
        options: [
          {
            title: {
              title: 'Only new completions count',
              subtitle: 'Only completions from the start date count.'
            },
            checked: true,
            example: 'Example: complete both modules.',
            onChange: value => console.log(value)
          },
          {
            title: {
              title: 'All completions count',
              subtitle: 'A module finished before the start date already counts as done.'
            },
            checked: false,
            example: 'Example: complete either module.',
            onChange: value => console.log(value)
          }
        ]
      },
      reminders: {
        title: 'Notifications',
        hint: 'Emails list the modules and their due dates, never the assignment title.',
        switches: [
          'When the assignment starts',
          '7 days before the due date',
          'On the due date',
          '1 day after the due date (overdue)',
          '3 days after the due date'
        ].map(title => ({title, value: true, onChange: value => console.log(value)}))
      }
    }
  }
};
export default fixture;
