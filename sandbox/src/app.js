import { createDisciplineCards } from '../../src';
import disciplines from '../assets/disciplines';
import skin from '../assets/skin';

export default (engine) => {
  const {h} = engine;
  const DisciplineCards = createDisciplineCards(engine, skin);

  return (props) => (
    <DisciplineCards disciplines={disciplines}>
    </DisciplineCards>
  );
};
