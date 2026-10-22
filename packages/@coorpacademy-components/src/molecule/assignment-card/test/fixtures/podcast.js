export default {
  props: {
    type: 'podcast',
    title: 'Leading hybrid teams',
    author: 'Coorpacademy',
    progress: 0,
    onClick: () => console.log('open the podcast'),
    dueState: 'dueSoon',
    dueStateLabel: 'Due soon',
    dueDateLabel: 'Due Tue 27 Oct'
  }
};
