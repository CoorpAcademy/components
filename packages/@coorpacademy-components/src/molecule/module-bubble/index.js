import Inferno from 'inferno';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import partial from 'lodash/fp/partial';
import unary from 'lodash/fp/unary';
import {checker, createValidate} from '../../util/validation';
import stopPropagation from '../../util/bubbling';
import style from './style.css';

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

const ModuleBubble = ({children, ...props}, {skin, translate}) => {
  const {onClick} = props;
  const _module = get('module', props);
  const code = getOr('', `icons[${_module.status}]`, skin);
  const icon = String.fromCharCode(code);

  const filtered = _module.filtered;
  const disabled = _module.disabled;

  const click = !disabled && pipe(
    stopPropagation,
    unary(partial(onClick, [_module]))
  );
  const label = translate(_module.label);

  const background = getOr('#fff', `mod[${_module.status}]`, skin);

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
            color: getOr('#fff', ['mod', 'icon', _module.status], skin)
          }}
        >
            {icon}
        </span>
      </div>
      <div className={style.label}>
        {label}
      </div>
    </div>
  );
};

ModuleBubble.validate = createValidate(conditions);
export default ModuleBubble;
