import fixture from './upload-done';

// Every login resolved: one count tag, nothing needs attention.
export default {
  props: {
    ...fixture.props,
    upload: {
      ...fixture.props.upload,
      file: {name: 'sales-emea.csv', detail: '48 rows · checked against logins just now'},
      summary: {valid: '48 valid'},
      keptLabel: 'All 48 learners are kept.',
      toggleLabel: 'Show all 48 rows',
      rows: [
        {login: 'k.nakamura', status: 'valid'},
        {login: 'r.silva', status: 'valid'}
      ]
    },
    total: {label: 'Estimated audience: 48 learners', detail: '48 from file'}
  }
};
