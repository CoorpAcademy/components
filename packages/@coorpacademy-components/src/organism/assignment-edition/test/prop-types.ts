import test from 'ava';
import PropTypes from 'prop-types';
import {propTypes} from '../types';
import {makeProps} from './helpers/props';

const validate = (props: unknown) => {
  const errors: string[] = [];
  const original = console.error;
  PropTypes.resetWarningCache();
  console.error = message => errors.push(message);
  try {
    PropTypes.checkPropTypes(propTypes, props, 'prop', 'AssignmentEdition');
  } finally {
    console.error = original;
    PropTypes.resetWarningCache();
  }
  return errors;
};

test.serial('runtime schema accepts minimal optional rule props and every focus section', t => {
  const props = makeProps();
  props.dates.rule.options = [{title: {title: 'All modules'}, onChange: () => undefined}];
  props.dates.reminders.switches = [];
  props.audience = {title: 'Audience'};
  props.contents = {title: 'Contents', button: {label: 'Add', onClick: () => undefined}, list: {}};
  [undefined, 'information', 'audience', 'contents', 'dates'].forEach(focusSection => {
    t.deepEqual(validate({...props, focusSection}), []);
  });
});

const invalidProps = [
  ...(['information', 'audience', 'contents', 'dates'] as const).map(section => ({
    name: `missing ${section}`,
    props: () => ({...makeProps(), [section]: undefined}),
    path: section
  })),
  {
    name: 'unknown focus section',
    props: () => ({...makeProps(), focusSection: 'review'}),
    path: 'focusSection'
  },
  {name: 'nonboolean busy', props: () => ({...makeProps(), busy: 'true'}), path: 'busy'},
  {name: 'nonboolean fetching', props: () => ({...makeProps(), isFetching: 1}), path: 'isFetching'},
  {
    name: 'missing title callback',
    props: () => {
      const props = makeProps();
      return {...props, information: {...props.information, field: {value: ''}}};
    },
    path: 'information.field.onChange'
  },
  {
    name: 'wrong information field type',
    props: () => {
      const props = makeProps();
      return {
        ...props,
        information: {...props.information, field: {...props.information.field, type: 'date'}}
      };
    },
    path: 'information.field.type'
  },
  {
    name: 'missing date callback',
    props: () => {
      const props = makeProps();
      return {...props, dates: {...props.dates, fields: [{title: 'Start', value: ''}]}};
    },
    path: 'dates.fields[0].onChange'
  },
  {
    name: 'wrong date field type',
    props: () => {
      const props = makeProps();
      return {
        ...props,
        dates: {...props.dates, fields: [{...props.dates.fields[0], type: 'text'}]}
      };
    },
    path: 'dates.fields[0].type'
  },
  {
    name: 'missing rule callback',
    props: () => {
      const props = makeProps();
      return {
        ...props,
        dates: {
          ...props.dates,
          rule: {...props.dates.rule, options: [{title: {title: 'All modules'}}]}
        }
      };
    },
    path: 'dates.rule.options[0].onChange'
  },
  {
    name: 'missing reminder callback',
    props: () => {
      const props = makeProps();
      return {
        ...props,
        dates: {...props.dates, reminders: {...props.dates.reminders, switches: [{value: true}]}}
      };
    },
    path: 'dates.reminders.switches[0].onChange'
  }
];

invalidProps.forEach(({name, props, path}) => {
  test.serial(`runtime schema rejects ${name}`, t => {
    const errors = validate(props());
    t.is(errors.length, 1);
    t.true(errors[0].includes(path));
  });
});
