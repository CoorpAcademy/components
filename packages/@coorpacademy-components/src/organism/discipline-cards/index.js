import set from 'lodash/fp/set';
import {checker, createValidate} from '../../util/validation';
import createDisciplineCard from '../../molecule/discipline-card';
import createThemeImage from '../../molecule/theme-image';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    disciplines: checker.array,
    onModuleClick: checker.func,
    onDisciplineClick: checker.func,
    theme: checker.oneOf(['default', 'circle']).optional,
    image: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const DisciplineCard = createDisciplineCard(treant, options);
  const ThemeImage = createThemeImage(treant, options);

  const DisciplineCards = (props, children) => {
    const {onModuleClick, onDisciplineClick, theme = 'default' } = props;

    if (props.disciplines.length > 0) {
      props.disciplines = set('[0].row', theme === 'circle', props.disciplines);
    }

    const disciplines = props.disciplines.map(discipline => {
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
    });

    return (
      <div className={style.default}>
        <ThemeImage image={props.image} />
        <div className={style.cardsWrapper}>
          {disciplines}
        </div>
      </div>
    );
  };

  DisciplineCards.validate = createValidate(conditions);
  return DisciplineCards;
};
