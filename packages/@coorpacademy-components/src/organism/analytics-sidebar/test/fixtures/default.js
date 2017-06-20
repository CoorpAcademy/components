export default {
  props: {
    populationsAvailable: [
      {
        name: 'ALL',
        value: 'ALL',
        selected: true
      },
      {
        name: 'Population 1',
        value: 'pop1',
        selected: false
      },
      {
        name: 'Population 2',
        value: 'pop2',
        selected: false
      }
    ],
    providersAvailable: [
      {
        name: 'ALL',
        value: 'ALL',
        selected: true
      },
      {
        name: 'Provider 1',
        value: 'prov1',
        selected: false
      },
      {
        name: 'Provider 2',
        value: 'prov2',
        selected: false
      }
    ]
  }
};
