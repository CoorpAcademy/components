import fixture from './upload-done';

// Every login resolved: one count tag, nothing to download.
export default {
  props: {
    ...fixture.props,
    upload: {
      ...fixture.props.upload,
      file: {name: 'sales-emea.csv', detail: '3 rows · checked against logins just now'},
      summary: {valid: '3 valid'},
      keptLabel: 'All 3 learners are kept.',
      report: undefined
    },
    total: {label: 'Estimated audience: 3 learners', detail: '3 from file'}
  }
};
