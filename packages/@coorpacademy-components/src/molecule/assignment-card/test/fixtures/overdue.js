// A chapter (5'learning) that is overdue. Lateness itself is never shown (L0): only the pill.
export default {
  props: {
    type: 'chapter',
    title: 'Managerial compass',
    author: 'iQera',
    progress: 0,
    favorite: true,
    addFavoriteToolTip: 'Added to my list',
    removeFavoriteToolTip: 'Removed from my list',
    onClick: () => console.log('open the chapter'),
    onFavoriteClick: () => console.log('favorite'),
    'favorite-aria-label': {
      favorite: 'In my list',
      addToFavorite: 'Add to my list',
      removeFromFavorite: 'Remove from my list'
    },
    dueState: 'overdue',
    dueStateLabel: 'Overdue',
    dueDateLabel: 'Due Mon 19 Oct'
  }
};
