import style from './discipline-cards.css';
import createDisciplineCard from '../discipline-card';

export default (engine, options) => (props) => {
  const {h} = engine;

  const DisciplineCard = createDisciplineCard(engine, options);

  const disciplines = props.disciplines.map(function(discipline){
    discipline.onClick = props.onDisciplineClick;
    discipline.onModuleClick = props.onModuleClick;
    return (
      <DisciplineCard {...discipline}>
      </DisciplineCard>
    );
  });

  return (
    <div className={style.default}>
      {disciplines}
    </div>
  );
};
