import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import DisciplineCard from '../../molecule/discipline-card';
import ThemeImage from '../../molecule/theme-image';
import style from './style.css';

function DisciplineCards(props) {
  const {
    image = 'bg',
    onModuleClick,
    onDisciplineClick,
    theme = 'default',
    disciplines = []
  } = props;


  const fixedDisciplines = disciplines.length > 0 ?
    set('[0].row', theme === 'circle', props.disciplines) :
    disciplines;

  const disciplineViews = map(discipline => {
    return (
      <DisciplineCard
        discipline={discipline}
        key={discipline.ref}
        onClick={onDisciplineClick}
        onModuleClick={onModuleClick}
        row={discipline.row}
        theme={theme}
      >
      </DisciplineCard>
    );
  }, fixedDisciplines);

  return (
    <div className={style.default}>
      <ThemeImage image={image} />
      <div className={style.cardsWrapper}>
        {disciplineViews}
      </div>
    </div>
  );
}

DisciplineCards.propTypes = {
  disciplines: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  onDisciplineClick: PropTypes.func.isRequired,
  onModuleClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['default', 'circle'])
};

export default DisciplineCards;
