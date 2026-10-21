import {module} from './default';

export default {
  props: {
    ...module,
    title: 'Cybersecurity reflexes',
    progress: 0.5,
    dueState: 'dueSoon',
    dueStateLabel: 'Due soon',
    dueDateLabel: 'Due Sat 24 Oct'
  }
};
