import style from './title.css';
import applyColorPrimary from '../../behaviour/color/primary';

export default (options, skin) => (props) => {
  const {h} = options;
  var disabled = props && props.disabled;
  const ColorPrimary = applyColorPrimary(options, skin);

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
