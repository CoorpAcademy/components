import { createDisciplineCard } from '../../src';
import { createSlide } from '../../src';

const state = {
  question: {
    title: 'Quel réseau social se distingue par ses messages instantanés limités à 140 signes ?'
  }
};

const skin = {
  primary: '#F0F',
  module: {
    isActive: '#0F0',
    isLocked: '#F00'
  }
};

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
