import todo from '../../../../../molecule/assignment-card/test/fixtures/default';
import dueSoon from '../../../../../molecule/assignment-card/test/fixtures/due-soon';
import overdue from '../../../../../molecule/assignment-card/test/fixtures/overdue';

export default {
  props: {
    welcome: {title: 'Welcome', subtitle: 'Your learning'},
    sections: [
      {
        key: 'assignments',
        type: 'assignments',
        title: 'Assigned to you',
        subtitle: 'Your next learning deadlines',
        icon: {iconName: 'clipboard-list'},
        cards: [
          ...[todo, dueSoon, overdue].map(({props}) => ({
            ...props,
            notification: {...props.notification},
            assignments: props.assignments.map(assignment => ({...assignment}))
          }))
        ]
      }
    ]
  }
};
