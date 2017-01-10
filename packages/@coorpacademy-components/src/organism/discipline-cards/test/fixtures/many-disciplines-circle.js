import update from 'lodash/fp/update';
import uniqueId from 'lodash/fp/uniqueId';
import Card1 from '../../../../molecule/discipline-card/test/fixtures/with-course-num';
import Card2 from '../../../../molecule/discipline-card/test/fixtures/with-modules';

const card1 = Card1.props.discipline;
const card2 = Card2.props.discipline;

const disciplines = [card1, card2, card1, card2, card1, card2].map(update('ref', () => uniqueId()));

export default {
  props: {
    disciplines,
    onModuleClick: () => null,
    onDisciplineClick: () => null,
    theme: 'circle',
    image: 'bg'
  }
};
