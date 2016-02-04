import style from './title.css';
import applyColorPrimary from '../../behaviour/color/primary';

export default (h, {skin}) => (props) => {
  var disabled = props && props.disabled;
  const ColorPrimary = applyColorPrimary(h, {skin});

  return (
      <ColorPrimary
        on={{
          color: style.defaultColor
        }}
      >
        <h1
          className={disabled ? style.disabled : style.normal}
        >
          {props.children}sdS
        </h1>
      </ColorPrimary>
  )
};
