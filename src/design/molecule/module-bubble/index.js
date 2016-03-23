import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {skin, translate} = options;

  const LabelModName = createLabelModName(engine, options);

  const iconCode = String.fromCharCode(skin.icons[props.status]);
  const inverted = props.inverted === 'true';
  const disabled = props.disabled === 'true';
  const className = disabled ? style.disabled : (inverted ? style.inverted : style.default);
  const label = translate ? translate(props.label) : props.label;

  return (
    <div className={style.modulewrapper}>
      <span className={className}
            attributes={{
              'data-icon': iconCode
            }}
            style={{
              background: skin && skin.mod[props.status]
            }}
            onClick={e => props.onClick(e)}
      >
      </span>
      <LabelModName>
        {label}
      </LabelModName>
    </div>
  );
};
