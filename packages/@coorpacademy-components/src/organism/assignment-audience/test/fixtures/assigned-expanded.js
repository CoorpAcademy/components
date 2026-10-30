import combined from './combined';

const learners = [
  ['alice', 'Alice Martin', 'alice.martin'],
  ['camille', 'Camille Durand', 'camille.durand'],
  ['diego', 'Diego Costa', 'diego.costa'],
  ['emma', 'Emma Weber', 'emma.weber'],
  ['fatima', 'Fatima Diallo', 'fatima.diallo'],
  ['gabriel', 'Gabriel Rossi', 'gabriel.rossi'],
  ['hana', 'Hana Novak', 'hana.novak'],
  ['ines', 'Inès Bernard', 'ines.bernard'],
  ['james', 'James Okafor', 'james.okafor'],
  ['lea', 'Léa Moreau', 'lea.moreau']
];

export default {
  props: {
    ...combined.props,
    populations: undefined,
    upload: undefined,
    individuals: {
      ...combined.props.individuals,
      selected: [{id: 'new-maya', label: 'Maya Chen', login: 'maya.chen'}]
    },
    total: {
      label: 'Estimated audience: 301 learners',
      detail: '300 already assigned · 1 added in this edit'
    },
    assigned: {
      title: '300 learners already assigned',
      subtitle: 'Added by file or one by one before this edit · they keep their progress',
      expanded: true,
      toggleLabel: 'Hide the list ▲',
      onToggle: () => console.log('toggle assigned learners'),
      filters: [
        {key: 'assigned', label: 'Already assigned (300)', selected: true},
        {key: 'added', label: 'Added in this edit (1)', selected: false},
        {key: 'removed', label: 'Removed in this edit (0)', selected: false},
        {key: 'deleted', label: 'Deleted accounts (0)', selected: false}
      ],
      onFilter: key => console.log('filter', key),
      search: {
        value: '',
        placeholder: 'Search assigned learners by name or login',
        onChange: value => console.log('search assigned', value)
      },
      pagination: {label: '1–10 of 300', onNext: () => console.log('next assigned page')},
      columns: ['Name', 'Login'],
      rows: learners.map(([id, name, login]) => ({
        id,
        fields: [name, login],
        action: {label: 'Remove', variant: 'danger', onClick: () => console.log('remove', id)}
      })),
      emptyLabel: 'No learners match your search'
    }
  }
};
