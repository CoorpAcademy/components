import style from './module-bubble.css'

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  console.log('module-bubble props : ', props, props.status);

  return (
    <div>
      <span className={style[props.status]}
            style={{
              background: skin && skin.module[props.status]
            }}
      >
        {props.status}
      </span>
      <span class="disciplineTreeItemProgressionText">
        label-todo
      </span>
    </div>
  );
};
