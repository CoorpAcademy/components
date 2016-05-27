import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import style from './module-bubble.css';
import createLabelModName from '../../atom/label-mod-name';

const conditions = checker.shape({
  props: checker.shape({
    module: checker.shape({
      disabled: checker.bool.optional,
      filtered: checker.bool.optional,
      label: checker.string,
      status: checker.string
    }),
    onClick: checker.func
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin, translate} = options;

  const LabelModName = createLabelModName(engine, options);

  const ModuleBubble = (props, children) => {
    const {module, onClick} = props;
    const code = getOr('', `icons[${module.status}]`, skin);
    const iconCode = String.fromCharCode(code);

    const filtered = module.filtered;
    const disabled = module.disabled;
    const className = filtered || disabled ? style.disabled : style.default;
    const label = translate ? translate(module.label) : module.label;

    const background = getOr('#fff', `mod[${module.status}]`, skin);

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
                background
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

  ModuleBubble.validate = createValidate(conditions);
  return ModuleBubble;
};
