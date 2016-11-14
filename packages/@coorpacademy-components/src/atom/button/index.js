import {checker, createValidate} from '../../util/validation';
import AddClassBehaviour from '../../behaviour/effects/add-class';
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
  const AddClass = AddClassBehaviour(treant, options);

  const Button = (props, children) => {
    const {
      className,
      color,
      submitValue,
      centered,
      disabled,
      type = 'submit',
      onClick
    } = props;

    const centeredStyle = centered && {
      margin: '0 auto',
      display: 'block'
    };

    let button = (
     <HoverFill>
        <div
          className={style.button}
          style={centeredStyle}
        >
         <input
            type={type}
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

    if (className) {
      button = (
        <AddClass className={className}>
          {button}
        </AddClass>
      );
    }

    return button;
  };

  Button.validate = createValidate(conditions);
  return Button;
};
