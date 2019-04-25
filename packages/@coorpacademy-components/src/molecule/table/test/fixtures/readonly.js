export default {
  props: {
    editable: false,
    rows: [
      {
        fields: ['Savoir planter des choux', 'Oui', 'Non', 'Non'],
        highlighted: true
      },
      {
        fields: ['Développer pour les nuls', 'Oui', 'Oui', 'Non']
      },
      {
        fields: ['La peinture flamande au 15e siècle', 'Oui', 'Non', 'Non']
      },
      {
        fields: ['Arrêter de procrastiner au travail', 'Oui', 'Non', 'Non']
      }
    ],
    columns: [
      {
        title: 'Title'
      },
      {
        title: 'Fr',
        info: 'French'
      },
      {
        title: 'En',
        info: 'English'
      },
      {
        title: 'Ru',
        info: 'Russian'
      }
    ]
  }
};
