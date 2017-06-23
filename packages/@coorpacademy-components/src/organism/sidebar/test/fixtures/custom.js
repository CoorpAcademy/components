export default {
  props: {
    items: [
      [
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
          selected: true
        },
        {
          title: 'Papa',
          type: 'link'
        },
        {
          title: 'Tango',
          type: 'link'
        },
        {
          title: 'Charlie',
          type: 'link'
        }
      ],
      [
        {
          title: 'Lieu de Départ',
          type: 'info',
          value: 'Bourget'
        },
        {
          title: 'Altitude Max',
          type: 'info',
          value: '40012'
        }
      ]
    ]
  }
};
