import createDisciplineCard from '../discipline-card';

export default (engine, options) => (props) => {
  const {h} = engine;

  const DisciplineCard = createDisciplineCard(engine, options);

  const disciplines = props.disciplines.map(function(discipline){
    return (
      <DisciplineCard {...discipline}>
      </DisciplineCard>
    );
  });

  return (
    <div>
      {disciplines}
    </div>
  );
};
