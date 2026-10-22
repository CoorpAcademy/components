export default {
  props: {
    type: 'scorm',
    title: 'Spot the phishing email',
    author: 'Coorpacademy',
    progress: 0,
    onClick: () => console.log('open the scorm'),
    dueState: 'todo',
    dueStateLabel: 'To do',
    dueDateLabel: 'Due Sun 15 Nov'
  }
};
