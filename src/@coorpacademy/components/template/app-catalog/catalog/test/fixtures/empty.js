/* eslint-disable max-len */

export default {
  props: {
    categories: [{
      name: 'Toutes les formations',
      href: '#'
    }, {
      name: 'Les plus consultés',
      href: '#popular'
    }, {
      name: 'Les nouveautés',
      href: '#news',
      selected: true
    }, {
      name: 'Esprit du temps',
      href: '#esprit-du-temps'
    }, {
      name: 'Digital',
      href: '#digital'
    }],
    products: null
  }
};
