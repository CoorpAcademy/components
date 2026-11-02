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
      label: 'Estimated audience: 300 learners',
      detail: '300 already assigned · 1 added · 1 removed in this edit'
    },
    assigned: {
      title: '300 learners already assigned · 1 removed in this edit',
      subtitle: 'Added by file or one by one before this edit · they keep their progress',
      expanded: true,
      toggleLabel: 'Hide the list ▲',
      onToggle: () => console.log('toggle assigned learners'),
      filters: [
        {key: 'assigned', label: 'Already assigned (300)', selected: true},
        {key: 'added', label: 'Added in this edit (1)', selected: false},
        {key: 'removed', label: 'Removed in this edit (1)', selected: false},
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
      // Every row shows its state and the action it allows, whatever the filter: Diego was
      // removed in this edit, so « Already assigned » shows him with his state and « Undo ».
      rows: learners.map(([id, name, login]) =>
        id === 'diego'
          ? {
              id,
              fields: [name, login],
              actionText: 'Removed in this edit',
              action: {label: 'Undo', variant: 'neutral', onClick: () => console.log('undo', id)}
            }
          : {
              id,
              fields: [name, login],
              action: {label: 'Remove', variant: 'danger', onClick: () => console.log('remove', id)}
            }
      ),
      emptyLabel: 'No learners match your search'
    }
  }
};
