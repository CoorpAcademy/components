import React from 'react';
import PropTypes from 'prop-types';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import DisciplineCard from '../../molecule/discipline-card';
import style from './style.css';

function DisciplineCards(props) {
  const {
    image = 'bg',
    onModuleClick,
    onDisciplineClick,
    disciplines = []
  } = props;

  const disciplineViews = map(discipline => {
    return (
      <DisciplineCard
        discipline={discipline}
        key={discipline.ref}
        onClick={onDisciplineClick}
        onModuleClick={onModuleClick}
      />
    );
  }, disciplines);

  return (
    <div className={style.default}>
      {disciplineViews}
    </div>
  );
}

DisciplineCards.propTypes = {
  disciplines: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  onDisciplineClick: PropTypes.func.isRequired,
  onModuleClick: PropTypes.func.isRequired
};

export default DisciplineCards;
