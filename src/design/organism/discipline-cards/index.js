import style from './discipline-cards.css';
import createDisciplineCard from '../discipline-card';
import get from 'lodash/fp/get';

export default (engine, options) => {
  const DisciplineCard = createDisciplineCard(engine, options);

  return props => {
    const {h} = engine;
    const {skin} = options;
    const {onModuleClick, onDisciplineClick} = props;

    const disciplines = props.disciplines.map(function(discipline) {
      return (
        <DisciplineCard
          discipline = {discipline}
          onClick = {onDisciplineClick}
          onModuleClick = {onModuleClick}
          key = {discipline.ref}
        >
        </DisciplineCard>
      );
    });

    const skinBackgroundUrl = get('images.tree', skin);
    const skinBG = get('theme.background', skin) || '#123';
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
