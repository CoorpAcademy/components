import style from './discipline-cards.css';
import createDisciplineCard from '../discipline-card';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {skin} = options;

  const DisciplineCard = createDisciplineCard(engine, options);

  const disciplines = props.disciplines.map(function(discipline){
    const {onModuleClick, onDisciplineClick} = props;
    return (
      <DisciplineCard discipline={{...discipline, onModuleClick, onClick: onDisciplineClick}}>
      </DisciplineCard>
    );
  });

  const skinBackgroundUrl = skin && skin.images && skin.images.tree;
  const skinBG = ( skin && skin.theme && skin.theme.background ) || '#123';
  const bg = skinBackgroundUrl ? 'url(' + skinBackgroundUrl + ')' : skinBG;

  return (
    <div
      className={style.default}
      style={{
        background: bg
      }}
    >
      {disciplines}
    </div>
  );
};
