export default {
  props: {
    title: 'Security essentials',
    status: 'active',
    statusLabel: 'Active',
    audienceSummary: 'Everyone',
    dateRange: '01 Oct 2026 09:00 GMT – 31 Oct 2026 18:00 GMT',
    completion: 42,
    sync: {state: 'done', label: 'Up to date', message: 'Last synchronized at 09:00 GMT'},
    actions: [
      {label: 'Edit', onClick: () => console.log('Edit assignment')},
      {label: 'Duplicate', onClick: () => console.log('Duplicate assignment')}
    ]
  }
};
