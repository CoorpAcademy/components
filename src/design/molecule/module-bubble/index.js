import style from './module-bubble.css'
import createLabelModName from '../../atom/label-mod-name';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const LabelModName = createLabelModName(renderer, skin);

  const iconCode = String.fromCharCode(skin.icons[props.status]);
  const inverted = props.inverted === 'true';
  const className = inverted ? style.inverted : style.default;

  console.log('---> ', props);

  return (
    <div
      onClick={e => props.click()}
    >
      <span className={className}
            attributes={{
              'data-icon': iconCode
            }}
            style={{
              background: skin && skin.mod[props.status]
            }}
      >
      </span>
      <LabelModName>
        {props.label}
      </LabelModName>
    </div>
  );
};
