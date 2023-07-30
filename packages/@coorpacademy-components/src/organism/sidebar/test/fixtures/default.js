export default {
  props: {
    items: [
      {
        title: 'Avion',
        type: 'select',
        options: [
          {
            name: 'Biplan',
            value: 'av1',
            selected: false
          },
          {
            name: 'Concorde',
            value: 'av2',
            selected: false
          }
        ]
      },
      {
        title: 'Mer',
        type: 'select',
        options: [
          {
            name: 'Mediterranée',
            value: 'see1',
            selected: false
          },
          {
            name: 'Manche',
            value: 'see2',
            selected: false
          }
        ]
      },
      {
        title: 'Allo',
        type: 'link',
        selected: true,
        activeIcon: true,
        setChildrenAsHtml: false
      },
      {
        title: 'Papa',
        type: 'link',
        setChildrenAsHtml: false
      },
      {
        title: 'Tango',
        type: 'link'
      },
      {
        title: 'Charlie',
        type: 'link'
      }
    ]
  }
};
