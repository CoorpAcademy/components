export default {
  props: {
    type: 'article',
    title: 'Password hygiene checklist',
    author: 'Coorpacademy',
    progress: 0,
    onClick: () => console.log('open the article'),
    dueState: 'todo',
    dueStateLabel: 'To do',
    dueDateLabel: 'Due Mon 30 Nov'
  }
};
