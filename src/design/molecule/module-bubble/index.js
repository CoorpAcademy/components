import style from './module-bubble.css'

export default (renderer, skin) => (props) => {
  const {h} = renderer;
  const iconCode = String.fromCharCode(skin.icons[props.status]);
  const inverted = props.inverted === 'true';
  const className = inverted ? style.inverted : style.default;

  return (
    <div>
      <span className={className}
            attributes={{
              'data-icon': iconCode
            }}
            style={{
              background: skin && skin.mod[props.status]
            }}
      >
      </span>
      <span class="disciplineTreeItemProgressionText">
        label-todo
      </span>
    </div>
  );
};
