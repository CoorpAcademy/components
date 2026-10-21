// An external video that is finished: the hover shows the completion date, never the due date (L0).
export default {
  props: {
    type: 'video',
    title: 'GDPR in 10 minutes',
    author: 'Coorpacademy',
    progress: 1,
    onClick: () => console.log('open the video'),
    dueState: 'done',
    dueStateLabel: 'Completed',
    dueDateLabel: 'Completed Thu 22 Oct'
  }
};
