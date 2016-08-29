import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createLabelModName from '../../atom/label-mod-name';
import { stopPropagation } from '../../util/bubbling';

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

export default (treant, options = {}) => {
  const {h} = treant;
  const {skin, translate} = options;

  const LabelModName = createLabelModName(treant, options);

  const ModuleBubble = (props, children) => {
    const {module, onClick} = props;
    const code = getOr('', `icons[${module.status}]`, skin);
    const icon = String.fromCharCode(code);

    const click = !disabled && pipe(
      stopPropagation,
      partial(unary(onClick), [module])
    );

    const filtered = module.filtered;
    const disabled = module.disabled;
    const label = translate ? translate(module.label) : module.label;

    const background = getOr('#fff', `mod[${module.status}]`, skin);

    return (
      <div className={filtered ? style.filtered : style.modulewrapper}
            attributes={{
              'data-name': 'module-bubble'
            }}
      >
        <div
          className={style.bubble}
          onClick={click}
        >
          <span
            className={style.bubbleBG}
            style={{
              background
            }}
          >
          </span>
          <span
            className={disabled ? style.iconDisabled : style.icon}
            style={{
              color: getOr('#fff', ['mod', 'icon', module.status], skin)
            }}
          >
              {icon}
          </span>
        </div>
        <LabelModName>
          {label}
        </LabelModName>
      </div>
    );
  };

  ModuleBubble.validate = createValidate(conditions);
  return ModuleBubble;
};
