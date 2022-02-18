export default {
  props: {
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    adaptiv: false,
    certification: false,
    type: 'course',
    title: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
    author: 'Coorpacademy',
    certifiedAuthor: true,
    progress: 0.65,
    badge: 'new',
    favorite: true,
    addFavoriteToolTip: 'Add to my list',
    removeFavoriteToolTip: 'Remove from my list',
    customer: {
      coorpOriginal: true,
      name: 'Decathlon creation'
    },
    onClick: () => console.log('click everywhere'),
    onFavoriteClick: () => console.log('click Favorite'),
    'card-content-aria-label': {
      author: 'auther name',
      progression: 'you have done 65% of the course',
      adaptive: 'this is an adaptive course'
    }
  }
};
