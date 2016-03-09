import { createDisciplineCard } from '../../src';
import { createSlide } from '../../src';

const skin = {};

export default (renderer) => {
  const {h} = renderer;
  const DisciplineCard = createDisciplineCard(renderer, skin);
  const Slide = createSlide(renderer, skin);

  return (props) => (
    <disciplineCard>
      plop
    </disciplineCard>

  );
};
