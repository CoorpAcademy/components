import get from 'lodash/fp/get';
import { spec, validate, check } from '../../../util/proptypes-checker';
import style from './discipline-cards.css';
import fixtures from './fixtures';
import createDisciplineCard from '../../molecule/discipline-card';

const conditions = {
  props: null,
  children: spec({
  })
};

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

  if (process.env.NODE_ENV !== 'production') {
    DisciplineCards.validate = validate(conditions);
    DisciplineCards.fixtures = fixtures;
  }

  return DisciplineCards;
};
