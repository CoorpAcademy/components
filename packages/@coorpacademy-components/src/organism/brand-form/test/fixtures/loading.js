export default {
  props: {
    isLoading: true,
    groups: [
      {
        title: 'Platform Name',
        fields: []
      },
      {
        title: 'Forum',
        fields: [
          {
            title: 'Activate',
            value: false,
            type: 'switch',
            description: 'Lorem Ipsum dolor sit amet.',
            onChange: () => {}
          }
        ]
      }
    ]
  }
};
