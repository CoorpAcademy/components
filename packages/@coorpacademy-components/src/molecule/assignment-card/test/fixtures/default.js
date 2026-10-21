// A module to do: the catalogue card (molecule/card) with one status pill. The due date shows on
// hover only, never with "GMT" (N2). No assignment title, no certification (L5).
const IMAGE =
  'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/partner-wedemain/fr/medias/img/cover/shutterstock_248741149-1470302136299.jpg&h=500&w=500&q=90';

export const module = {
  type: 'course',
  image: IMAGE,
  title: 'Fire safety basics',
  author: 'Coorpacademy',
  certifiedAuthor: true,
  customer: {coorpOriginal: true, name: 'Coorpacademy'},
  favorite: false,
  addFavoriteToolTip: 'Added to my list',
  removeFavoriteToolTip: 'Removed from my list',
  onClick: () => console.log('open the module'),
  onFavoriteClick: () => console.log('favorite'),
  'favorite-aria-label': {
    favorite: 'In my list',
    addToFavorite: 'Add to my list',
    removeFromFavorite: 'Remove from my list'
  }
};

export default {
  props: {
    ...module,
    progress: 0.25,
    dueState: 'todo',
    dueStateLabel: 'To do',
    dueDateLabel: 'Due Mon 9 Nov'
  }
};
