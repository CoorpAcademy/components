import Card1 from '../../../../molecule/discipline-card/test/fixtures/with-course-num';
import Card2 from '../../../../molecule/discipline-card/test/fixtures/with-modules';

const card1 = Card1.props.discipline;
const card2 = Card2.props.discipline;

export default {
  props: {
    image: 'bg',
    disciplines: [card1, card2, card1, card2, card1, card2],
    onModuleClick: () => null,
    onDisciplineClick: () => null
  }
};
