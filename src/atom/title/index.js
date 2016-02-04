import style from './title.css';
import applyColorPrimary from '../../behaviour/color/primary';

export default (h, options) => (props) => {
  var disabled = props && props.disabled;
  const ColorPrimary = applyColorPrimary(h, options);

  return (
      <ColorPrimary
        on={{
          color: style.defaultColor
        }}
      >
        <h1
          className={disabled ? style.disabled : style.normal}
        >
          {props.children}
        </h1>
      </ColorPrimary>
  )
};
