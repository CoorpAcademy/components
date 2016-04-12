import style from './discipline-cards.css';
import createDisciplineCard from '../discipline-card';

export default (engine, options) => {
  const DisciplineCard = createDisciplineCard(engine, options);

  return (props) => {
    const {h} = engine;
    const {skin} = options;
    const {onModuleClick, onDisciplineClick} = props;

    const disciplines = props.disciplines.map(function(discipline){
      return (
        <DisciplineCard
          discipline    = {discipline}
          onClick       = {onDisciplineClick}
          onModuleClick = {onModuleClick}
          key           = {discipline.ref}
        >
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
          backgroundImage: bg
        }}
      >
        {disciplines}
      </div>
    );
  };
};
