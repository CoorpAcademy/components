import done from '../../../../molecule/assignment-card/test/fixtures/done';
import {module} from '../../../../molecule/assignment-card/test/fixtures/default';
import fixture, {tabs} from './default';

// Finished: a flat grid, most recently finished first (D1). The hover shows the completion date,
// never the due date (L0). « Cybersecurity reflexes » is also in To do: the learner finished it
// under one assignment and still owes it under another, so it shows once per status (L5b).
export default {
  props: {
    ...fixture.props,
    tabs: tabs('done'),
    sections: [],
    cards: [
      done.props,
      {
        ...module,
        title: 'Cybersecurity reflexes',
        progress: 1,
        dueState: 'done',
        dueStateLabel: 'Completed',
        dueDateLabel: 'Completed Tue 20 Oct'
      },
      {
        type: 'chapter',
        title: 'Password hygiene',
        author: 'Coorpacademy',
        progress: 1,
        dueState: 'done',
        dueStateLabel: 'Completed',
        dueDateLabel: 'Completed Mon 12 Oct'
      }
    ]
  }
};
