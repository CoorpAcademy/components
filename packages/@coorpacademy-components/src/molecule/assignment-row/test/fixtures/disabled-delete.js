import Default from './default';

export default {
  props: {
    ...Default.props,
    audienceSummary: '3 populations · 12 learners',
    actions: [
      {label: 'Edit', onClick: () => console.log('Edit started assignment')},
      {
        label: 'Delete',
        onClick: () => console.log('Delete assignment'),
        disabled: true,
        danger: true
      }
    ]
  }
};
