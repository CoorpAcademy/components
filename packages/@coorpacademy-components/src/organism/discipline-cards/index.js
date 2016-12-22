import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import DisciplineCard from '../../molecule/discipline-card';
import ThemeImage from '../../molecule/theme-image';
import style from './style.css';

function DisciplineCards({children, ...props}) {
  const {
    image = 'bg',
    onModuleClick,
    onDisciplineClick,
    theme = 'default'
  } = props;

  if (props.disciplines.length > 0) {
    props.disciplines = set('[0].row', theme === 'circle', props.disciplines);
  }

  const disciplineViews = map(discipline => {
    return (
      <DisciplineCard
        discipline = {discipline}
        onClick = {onDisciplineClick}
        onModuleClick = {onModuleClick}
        theme = {theme}
        key = {discipline.ref}
        row = {discipline.row}
      >
      </DisciplineCard>
    );
  }, props.disciplines);

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
  disciplines: PropTypes.array.isRequired,
  onModuleClick: PropTypes.func.isRequired,
  onDisciplineClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['default', 'circle']),
  image: PropTypes.string
};

export default DisciplineCards;
