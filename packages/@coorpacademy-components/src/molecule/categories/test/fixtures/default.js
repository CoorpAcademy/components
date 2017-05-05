export default {
  props: {
    categories: [
      {
        name: 'Toutes les formations',
        href: '#'
      },
      {
        name: 'Les plus consultés',
        href: '#popular'
      },
      {
        name: 'Les nouveautés',
        href: '#news'
      },
      {
        name: 'Esprit du temps',
        href: '#esprit-du-temps',
        selected: true
      },
      {
        name: 'Digital',
        href: '#digital'
      }
    ]
  }
};
