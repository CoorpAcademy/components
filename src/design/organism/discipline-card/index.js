import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, options) => {
  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  return props => {
    const {h} = engine;
    const {translate} = options;
    const {discipline, onClick, onModuleClick} = props;

    const disciplineClass = discipline.visible ? style.default : style.hidden;
    const rand = (Math.floor(Math.random() * 7) + 3) * .2;
    const duration = discipline.visible ? rand : 1;
    const animationDuration = `${duration}s`;

    const modules = discipline.modules.map((module, index) => (
      <ModuleBubble
        module = {module}
        onClick = {onModuleClick}
        delay = {index}
        after = {duration}
        key = {module.ref}
      >
      </ModuleBubble>
    ));

    const label = translate ? translate(discipline.label) : discipline.label;

    return (
      <div className={disciplineClass}
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
        <CenteredText>
          <div className={style.moduleProgressionWrapper}>
            {modules}
          </div>
        </CenteredText>
      </div>
    );
  };
};
