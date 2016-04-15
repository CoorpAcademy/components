import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

export default (engine, options) => {
  const {h} = engine;
  const {skin, translate} = options;
  const LabelModName = createLabelModName(engine, options);

  return (props) => {
    const {module, onClick, delay, after} = props;
    const iconCode = String.fromCharCode(skin.icons[module.status]);
    const filtered = module.filtered;
    const disabled = module.disabled;
    const className = filtered || disabled ? style.disabled : style.default;
    const label = translate ? translate(module.label) : module.label;

    const animationDelay = ((delay || 0) * 0.08 + (after || 0) * 0.8) + 's';

    return (
      <div className={style.modulewrapper}
            style={{
              animationDelay: animationDelay
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
                onClick(module);
              }}
        >
        </span>
        <LabelModName>
          {label}
        </LabelModName>
      </div>
    );
  };
};
