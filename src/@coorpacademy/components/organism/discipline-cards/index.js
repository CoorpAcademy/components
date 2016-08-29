import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createDisciplineCard from '../../molecule/discipline-card';

const conditions = checker.shape({
  props: checker.shape({
    disciplines: checker.array,
    onModuleClick: checker.func,
    onDisciplineClick: checker.func
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {skin} = options;
  const DisciplineCard = createDisciplineCard(treant, options);

  const bgColor = getOr('transparent', 'common.background', skin);

  const DisciplineCards = (props, children) => {
    const {onModuleClick, onDisciplineClick} = props;

    const disciplines = props.disciplines.map(discipline => (
      <DisciplineCard
        discipline = {discipline}
        onClick = {onDisciplineClick}
        onModuleClick = {onModuleClick}
        key = {discipline.ref}
      >
      </DisciplineCard>
    ));

    return (
      <div
        className={style.default}
        style={{ background: bgColor }}
      >
        {disciplines}
      </div>
    );
  };

  DisciplineCards.validate = createValidate(conditions);
  return DisciplineCards;
};
