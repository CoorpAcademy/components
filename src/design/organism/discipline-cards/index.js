import createDisciplineCard from '../discipline-card';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const DisciplineCard = createDisciplineCard(renderer, skin);

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
