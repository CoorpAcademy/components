import { spec, validate, check } from '../../../util/proptypes-checker';
import style from './module-bubble.css';
import fixtures from './fixtures';
import createLabelModName from '../../atom/label-mod-name';

const conditions = {
  props: null,
  children: spec({
  })
};

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

  if (process.env.NODE_ENV !== 'production') {
    ModuleBubble.validate = validate(conditions);
    ModuleBubble.fixtures = fixtures;
  }

  return ModuleBubble;
};
