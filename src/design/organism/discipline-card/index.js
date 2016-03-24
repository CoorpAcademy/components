import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {translate} = options;

  const ModuleBubble = createModuleBubble(engine, options);
  const CenteredText = CenteredTextBehaviour(engine, options);

  const modules = props.modules.map(function(module){
    return (
      <ModuleBubble {...module}>
      </ModuleBubble>
    );
  });

  const label = translate ? translate(props.label) : props.label;

  return  (
    <div className={style.default}
         onClick={e => props.onClick(e, label)}
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
