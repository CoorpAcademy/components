import { checker, createValidate } from '../../../util/validation';
import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../behaviour/align/centered';

const conditions = checker.shape({
  props: checker.shape({
    discipline: checker.shape({
      visible: checker.bool.optional,
      modules: checker.array
    }),
    onClick: checker.func,
    onModuleClick: checker.func
  }),
  children: checker.none
});

export default (engine, options) => {
  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  const DisciplineCard = (props, children) => {
    const {h} = engine;
    const {translate, skin} = options;
    const {discipline, onClick, onModuleClick} = props;

    const disciplineClass = discipline.visible === false ? style.hidden : style.default;
    const rand = (Math.floor(Math.random() * 7) + 3) * .2;
    const duration = discipline.visible ? rand : 1;
    const animationDuration = `${duration}s`;

    const modules = discipline.modules.map(module => (
      <ModuleBubble
        module = {module}
        onClick = {onModuleClick}
        key = {module.ref}
      >
      </ModuleBubble>
    ));

    const label = translate ? translate(discipline.label) : discipline.label;
    const requireColoredBarBG = discipline.courseNum !== 'undefined' && skin && skin.courses;
    const coloredBarBG = requireColoredBarBG && skin.courses[discipline.courseNum];

    let bar;

    if (coloredBarBG) {
      bar =
        <div
          style={{
            background: coloredBarBG,
            height: '5px'
          }}
        />;
    }

    return (
      <div className={disciplineClass}
           attributes={{
             'data-name': 'discipline-card'
           }}
           onClick={e => onClick(discipline)}
           style={{
             animationDuration
           }}
      >
        <div className={style.area}>
          <div className={style.text}>
            <p className={style.headerModule}>
              {label}
            </p>
          </div>
        </div>

        {bar}

        <CenteredText>
          <div className={style.moduleProgressionWrapper}>
            {modules}
          </div>
        </CenteredText>
      </div>
    );
  };

  DisciplineCard.validate = createValidate(conditions);
  return DisciplineCard;
};
