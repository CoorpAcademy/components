import createLabel from '../label';
import FontNormalBehaviour from '../../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (engine, options) => (props) => {
  const {h} = engine;

  const Label = createLabel(engine, options);

  const FontNormal = FontNormalBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

  return (
    <FontNormal>
      <ColorTextNormal>
        <Label>
          {props.children}
        </Label>
      </ColorTextNormal>
    </FontNormal>
  );
};
