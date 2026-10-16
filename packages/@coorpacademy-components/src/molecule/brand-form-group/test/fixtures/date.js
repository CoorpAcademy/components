export default {
  props: {
    title: 'Assignment dates',
    fields: [
      {
        type: 'date',
        theme: 'coorpmanager',
        title: 'Start date',
        name: 'assignmentStart',
        value: '2026-11-03',
        min: '2026-11-03',
        hint: 'Choose a start date in GMT.',
        suffix: 'GMT',
        required: true,
        onChange: value => console.log(value)
      }
    ]
  }
};
