import overdue from '../../../../molecule/assignment-card/test/fixtures/overdue';
import dueSoon from '../../../../molecule/assignment-card/test/fixtures/due-soon';
import podcast from '../../../../molecule/assignment-card/test/fixtures/podcast';
import todo from '../../../../molecule/assignment-card/test/fixtures/default';
import scorm from '../../../../molecule/assignment-card/test/fixtures/scorm';
import article from '../../../../molecule/assignment-card/test/fixtures/article';

// « Assigned to you » at /assigned (N4): two tabs. To do (not started + in progress) in three
// sections, Overdue / Due this week (the next 7 days) / Due after this week, each in the N3 order.
export const tabs = (selected, todoCount = 6, doneCount = 3) => [
  {
    key: 'todo',
    label: 'To do',
    count: todoCount,
    selected: selected === 'todo',
    onClick: () => console.log('todo')
  },
  {
    key: 'done',
    label: 'Finished',
    count: doneCount,
    selected: selected === 'done',
    onClick: () => console.log('done')
  }
];

export const sections = [
  {
    key: 'overdue',
    title: 'Overdue',
    subtitle: 'Due before Wed 21 Oct',
    count: 1,
    cards: [overdue.props]
  },
  {
    key: 'dueThisWeek',
    title: 'Due this week',
    subtitle: 'Wed 21 Oct – Wed 28 Oct',
    count: 2,
    cards: [dueSoon.props, podcast.props]
  },
  {
    key: 'dueAfterThisWeek',
    title: 'Due after this week',
    subtitle: 'From Thu 29 Oct',
    count: 3,
    cards: [todo.props, scorm.props, article.props]
  }
];

export default {
  props: {
    title: 'Assigned to you',
    tabs: tabs('todo'),
    sections,
    onCardClick: card => console.log('open', card.title)
  }
};
