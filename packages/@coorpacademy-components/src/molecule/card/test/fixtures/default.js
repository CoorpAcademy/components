export default {
  props: {
    image:
      'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90',
    adaptiv: false,
    certification: false,
    type: 'course',
    title: 'From Mass Market to One to One targeting Lorem ipsum',
    author: 'Coorpacademy',
    certifiedAuthor: true,
    progress: 0.65,
    badge: 'new',
    favorite: true,
    addFavoriteToolTip: 'Add to my list',
    removeFavoriteToolTip: 'Remove from my list',
    isSelected: undefined,
    customer: {
      coorpOriginal: true,
      name: 'Decathlon creation'
    },
    onClick: () => console.log('click everywhere'),
    onFavoriteClick: () => console.log('click Favorite'),
    'aria-label': 'course card',
    'background-aria-label': 'image wthout informations',
    'favorite-aria-label': {
      favorite: 'this cours is your favorite',
      addToFavorite: 'add to favorite',
      removeFromFavorite: 'remove from favorite'
    },
    'selectable-aria-label': {
      select: 'select course',
      unSelect: 'unselect course'
    },
    'customer-aria-label': 'made by',
    'badge-aria-label': 'new course',
    'disabled-aria-label': 'the course is disabled',
    'card-content-aria-label': {
      author: 'auther name',
      progression: 'you have done 65% of the course',
      adaptive: 'this is an adaptive course'
    }
  }
};
