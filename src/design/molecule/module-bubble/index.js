import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

export default (engine, options) => (props) => {
  const {h} = engine;
  const {skin, translate} = options;
  const {module} = props;

  const LabelModName = createLabelModName(engine, options);

  const iconCode = String.fromCharCode(skin.icons[module.status]);
  const filtered = module.filtered;
  const disabled = module.disabled;
  const className = filtered || disabled ? style.disabled : style.default;
  const label = translate ? translate(module.label) : module.label;

  const delay = (module.delay * 0.15 + module.after * 0.8) + 's';

  return (
    <div className={style.modulewrapper}
          style={{
            animationDelay: delay
          }}>
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
