import createModuleBubble from '../../molecule/module-bubble';

export default (engine, skin) => (props) => {
  const {h} = engine;

  const ModuleBubble = createModuleBubble(engine, skin);

  const modules = props.discipline.modules.map(function(module){
    return (
      <ModuleBubble module={module}>
      </ModuleBubble>
    )
  });

  return  (
    <div>
      <p>
        {props.discipline.ref}
      </p>
      <div>
        {modules}
      </div>
    </div>
  );
};
