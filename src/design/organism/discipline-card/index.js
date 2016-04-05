import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {translate} = options;
  const {discipline} = props;

  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  const duration = (Math.floor(Math.random() * 7) + 3) * .2;
  const animationDuration = duration +'s';

  const modules = discipline.modules.map(function(module, index){
    return (
      <ModuleBubble module={{
        ...module,
        onClick:
        discipline.onModuleClick,
        delay: index,
        after: duration
      }}>
      </ModuleBubble>
    );
  });

  const label = translate ? translate(discipline.label) : discipline.label;

  return  (
    <div className={style.default}
         onClick={e => discipline.onClick(discipline)}
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
