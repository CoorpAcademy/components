import {AssignmentEditionPropsFixture} from '../../types';
import combined from '../../../assignment-audience/test/fixtures/combined';
import assignment from '../../../content-selection-list/test/fixtures/assignment';
import date from '../../../../molecule/brand-form-group/test/fixtures/date';

const fixture: AssignmentEditionPropsFixture = {
  props: {
    information: {
      title: 'Information',
      subtitle: 'Give your assignment a clear name.',
      field: {
        title: 'Assignment title',
        value: 'Safety onboarding',
        onChange: value => console.log(value)
      }
    },
    audience: {
      ...combined.props,
      upload: {...combined.props.upload, status: 'done'}
    },
    contents: assignment.props,
    dates: {
      title: 'Dates',
      fields: [
        {...date.props.fields[0], type: 'date'},
        {
          title: 'End date',
          name: 'assignmentEnd',
          value: '2026-12-03',
          min: '2026-11-03',
          hint: 'Choose an end date in GMT.',
          suffix: 'GMT',
          onChange: value => console.log(value)
        }
      ],
      rule: {
        title: 'Completion rule',
        options: [
          {
            title: {
              title: 'Complete all modules',
              subtitle: 'Learners must complete every module.'
            },
            checked: true,
            example: 'Example: complete both modules.',
            onChange: value => console.log(value)
          },
          {
            title: {
              title: 'Complete any module',
              subtitle: 'Learners must complete at least one module.'
            },
            checked: false,
            example: 'Example: complete either module.',
            onChange: value => console.log(value)
          }
        ]
      },
      reminders: {
        hint: 'Reminders are sent to learners who have not completed the assignment.',
        switches: [
          {
            title: 'Send a reminder before the deadline',
            value: true,
            onChange: value => console.log(value)
          },
          {
            title: 'Send a reminder after the deadline',
            value: false,
            onChange: value => console.log(value)
          }
        ]
      }
    }
  }
};
export default fixture;
