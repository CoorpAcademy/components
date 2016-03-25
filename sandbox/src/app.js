import style from './main.css';
import { createDisciplineCards } from '../../src';
import disciplines from '../assets/disciplines';
import skin from '../assets/skin';

export default (engine) => {
  const {h} = engine;
  const DisciplineCards = createDisciplineCards(engine, options);

  return (props) => (
    <div className={style.learningTreeDefault}>
        <DisciplineCards disciplines={disciplines}>
        </DisciplineCards>
    </div>
  );
};
