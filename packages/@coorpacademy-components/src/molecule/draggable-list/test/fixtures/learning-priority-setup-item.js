import LearningPrioritySetupItem from '../../../learning-priority-setup-item/test/fixtures/default';

const {props: item} = LearningPrioritySetupItem;

const item2 = {
  ...item,
  priorityRef: 'playlist-ref2',
  id: 'playlist-ref2',
  title: 'Playlist top 1',
  type: 'playlist'
};

const item3 = {
  ...item,
  priorityRef: 'certificate-ref3',
  id: 'certificate-ref3',
  title: 'Management',
  type: 'certificate'
};

export default {
  props: {
    itemType: 'learning-priority-setup-item',
    items: [item, item2, item3],
    onDrop: (dragged, dropped) => {
      console.log('foo');
      console.log({dragged, dropped});
    }
  }
};
