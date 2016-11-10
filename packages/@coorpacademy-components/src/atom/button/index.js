import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    background: checker.color.optional,
    color: checker.color.optional,
    submitValue: checker.string,
    centered: checker.bool.optional,
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
      centered,
      disabled,
      onClick
    } = props;

    const centeredStyle = centered && {
      margin: '0 auto',
      display: 'block'
    };

    return (
      <HoverFill>
        <div
          className={style.button}
          style={{
            background,
            ...centeredStyle
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
