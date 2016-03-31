import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {skin, translate} = options;
  const {module} = props;

  const LabelModName = createLabelModName(engine, options);

  const iconCode = String.fromCharCode(skin.icons[module.status]);
  const disabled = module.disabled;
  const className = disabled ? style.disabled : style.default;
  const label = translate ? translate(module.label) : module.label;

  return (
    <div className={style.modulewrapper}>
      <span className={className}
            attributes={{
              'data-icon': iconCode
            }}
            style={{
              background: skin && skin.mod[module.status]
            }}
            onClick={e => {
              e.stopPropagation();
              module.onClick(module);
            }}
      >
      </span>
      <LabelModName>
        {label}
      </LabelModName>
    </div>
  );
};
