// Short labels: each tab is as wide as its label and count.
export default {
  props: {
    compact: true,
    items: [
      {title: 'To do', count: 0, onClick: () => console.log('To do'), isActive: true},
      {title: 'Finished', count: 3, onClick: () => console.log('Finished'), isActive: false}
    ]
  }
};
