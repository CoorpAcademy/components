export const defaultProps = {
  certifications: [{
    usergoal: {
      label: 'label',
      goal: {
        title: 'title',
        condition: {
          nbDone: 1
        }
      }
    },
    progress: 23
  }],
  sorting: {
    theme: 'skillDetail',
    options: [
      {
        name: 'Position',
        value: 'Position',
        selected: true
      },
      {
        name: 'Most popular',
        value: 'Most popular',
        selected: false
      },
      {
        name: 'Newest',
        value: 'Newest',
        selected: false
      }
    ],
    onChange: value => console.log(value)
  },
};

export default {
  props: defaultProps
};
