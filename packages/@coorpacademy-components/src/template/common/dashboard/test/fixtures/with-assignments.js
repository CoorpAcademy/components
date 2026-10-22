import overdue from '../../../../../molecule/assignment-card/test/fixtures/overdue';
import dueSoon from '../../../../../molecule/assignment-card/test/fixtures/due-soon';
import podcast from '../../../../../molecule/assignment-card/test/fixtures/podcast';
import todo from '../../../../../molecule/assignment-card/test/fixtures/default';
import scorm from '../../../../../molecule/assignment-card/test/fixtures/scorm';
import article from '../../../../../molecule/assignment-card/test/fixtures/article';

// « Assigned to you » (T1): a strip with arrows and « See all » (V1). Open modules only, in the
// order the MOOC sends (N3: nearest due date, then most advanced, then oldest start date).
// Every card format side by side: the pill and the card height line up (N2).
export const cards = [overdue, dueSoon, podcast, todo, scorm, article].map(({props}) => props);

export default {
  props: {
    welcome: {title: 'Welcome', subtitle: 'Your learning'},
    sections: [
      {
        key: 'assignments',
        type: 'assignments',
        title: 'Assigned to you',
        // Every open module, whatever the number of cards loaded in the strip
        count: 8,
        cards,
        showMore: 'See all',
        onShowMore: () => console.log('go to /assigned')
      }
    ]
  }
};
