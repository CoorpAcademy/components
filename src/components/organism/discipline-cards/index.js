import get from 'lodash/fp/get';
import { validate, checker } from '../../../util/validation';
import style from './discipline-cards.css';
import fixtures from './fixtures';
import createDisciplineCard from '../../molecule/discipline-card';

const conditions = checker.shape({
  props: checker.shape({
    disciplines: checker.array,
    onModuleClick: checker.func,
    onDisciplineClick: checker.func
  }),
  children: checker.none
});

export default (engine, options) => {
  const DisciplineCard = createDisciplineCard(engine, options);

  const DisciplineCards = (props, children) => {
    const {h} = engine;
    const {skin} = options;
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

    const skinBackgroundUrl = get('images.tree', skin);
    const backgroundImage = { backgroundImage: `url(${skinBackgroundUrl})` };

    const skinBG = get('theme.background', skin) || '#123';
    const background = {background: skinBG };

    const bg = skinBackgroundUrl ? backgroundImage : background;

    return (
      <div
        className={style.default}
        style={bg}
      >
        {disciplines}
      </div>
    );
  };

  DisciplineCards.validate = createValidate(conditions);
  return DisciplineCards;
};
