import getOr from 'lodash/fp/getOr';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
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

export default (engine, options = {}) => {
  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  const DisciplineCard = (props, children) => {
    const {h} = engine;
    const {translate, skin} = options;
    const {discipline, onClick, onModuleClick} = props;

    const hidden = discipline.visible === false;
    const disciplineClass = hidden ? style.hidden : style.default;
    const rand = (Math.floor(Math.random() * 7) + 3) * .2;
    const duration = hidden ? 1 : rand;
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
    const hasCourse = discipline.courseNum !== 'undefined';

    const bg = getOr('#fff', `courses[${discipline.courseNum}]`, skin);
    const bar =
      <div
        style={{
          background: bg,
          height: '5px'
        }}
      />;

    return (
      <div className={disciplineClass}
           attributes={{
             'data-name': 'discipline-card'
           }}
           onClick={partial(unary(onClick), discipline)}
           style={{
             animationDuration
           }}
      >
        <div className={style.area}
             onClick={e => onClick(discipline)}
        >
          <div className={style.text}>
            <p className={style.headerModule}>
              {label}
            </p>
          </div>
        </div>

        {hasCourse && bar}

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
