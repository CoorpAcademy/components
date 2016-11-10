import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    background: checker.color.optional,
    color: checker.color.optional,
    submitValue: checker.string,
    disabled: checker.bool.optional,
    onClick: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const HoverFill = HoverFillBehaviour(treant, options);

  const Button = (props, children) => {
    const {
      background,
      color,
      submitValue,
      disabled,
      onClick
    } = props;

    return (
      <HoverFill>
        <div
          className={style.button}
          style={{
            background
          }}
        >
          <input
            type='submit'
            value={submitValue}
            disabled={disabled}
            onClick={onClick}
            style={{
              color
            }}
          />
        </div>
      </HoverFill>
    );
  };

  Button.validate = createValidate(conditions);
  return Button;
};
