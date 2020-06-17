export default {
  props: {
    headerTitle: 'History',
    onRefresh: () => {
      console.log('On Refresh');
    },
    refreshLabel: 'Refresh data',
    emptyValue: 'There is nothing to display.',
    isPending: false,
    editable: false,
    rows: [
      {
        fields: [
          'Massive battle',
          '2020-01-01 15:50',
          'Emile Danjoux',
          '5 cohortes',
          '(Base) Le modèle commercial',
          'Easy'
        ]
      },
      {
        fields: [
          'Massive battle',
          '2020-01-02 15:50',
          'Emile Danjoux',
          '4 cohortes',
          '(Base) Le modèle commercial',
          'Easy'
        ]
      }
    ],
    columns: [
      {
        title: 'Type',
        filtered: false
      },
      {
        title: 'Date',
        filtered: false
      },
      {
        title: 'Created by',
        filtered: true
      },
      {
        title: 'Send At',
        filtered: false
      },
      {
        title: 'Course',
        filtered: false
      },
      {
        title: 'Difficulty level',
        filtered: false
      }
    ]
  }
};
