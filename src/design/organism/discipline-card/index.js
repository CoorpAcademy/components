import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {translate} = options;
  const {discipline} = props;

  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  const modules = discipline.modules.map(function(module){
    return (
      <ModuleBubble module={{...module, onClick: discipline.onModuleClick}}>
      </ModuleBubble>
    );
  });

  const label = translate ? translate(discipline.label) : discipline.label;

  return  (
    <div className={style.default}
         onClick={e => modules.onClick(modules)}
    >
      <CenteredText>
        <p className={style.headerModule}>
          {label}
        </p>
      </CenteredText>
      <CenteredText>
        <div className={style.moduleProgressionWrapper}>
          {modules}
        </div>
      </CenteredText>
    </div>
  );
};
