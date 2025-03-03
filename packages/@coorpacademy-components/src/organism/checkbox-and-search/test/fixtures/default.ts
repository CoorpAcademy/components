export default {
  props: {
    title: 'Filtres',
    type: 'checkbox',
    withSearch: true,
    options: [
      {
        label: 'active listening',
        value: 'active-listening',
        selected: true,
        ref: 'cskill_94',
        count: 10,
        onClick: () => {
          console.log('active listening selected');
        }
      }
    ]
  }
};
