import style from './module-bubble.css';
import { spec, validate, check } from '../../../util/proptypes-checker';
import createLabelModName from '../../atom/label-mod-name';

const propTypes = spec({
  // module, onClick
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin, translate} = options;

  const icons = skin && skin.icons;
  const LabelModName = createLabelModName(engine, options);

  const ModuleBubble = (props, children) => {
    const {module, onClick} = props;
    const iconCode = icons && String.fromCharCode(icons[module.status]);
    const filtered = module.filtered;
    const disabled = module.disabled;
    const className = filtered || disabled ? style.disabled : style.default;
    const label = translate ? translate(module.label) : module.label;

    return (
      <div className={style.modulewrapper}
            attributes={{
              'data-name': 'module-bubble'
            }}
      >
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

  ModuleBubble.validate = validate(propTypes);
  return ModuleBubble;
};
