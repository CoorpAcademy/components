import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, skin, translate) => (props) => {
  const {h} = engine;

  const ModuleBubble = createModuleBubble(engine, skin);
  const CenteredText = CenteredTextBehaviour(engine, skin);

  const modules = props.modules.map(function(module){
    return (
      <ModuleBubble {...module}>
      </ModuleBubble>
    );
  });

  const label = translate ? translate(props.label) : props.label;

  return  (
    <div className={style.default}>
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
