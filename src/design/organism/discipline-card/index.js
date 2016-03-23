import style from './discipline-card.css';
import createModuleBubble from '../../molecule/module-bubble';
import CenteredTextBehaviour from '../../../behaviour/align/centered';

export default (engine, skin) => (props) => {
  const {h} = engine;

  const ModuleBubble = createModuleBubble(engine, skin);
  const CenteredText = CenteredTextBehaviour(engine, skin);

  const modules = props.discipline.modules.map(function(module){
    return (
      <ModuleBubble module={module}>
      </ModuleBubble>
    );
  });

  return  (
    <div className={style.default}>
      <CenteredText>
        <p className={style.headerModule}>
          {props.discipline.ref}
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
