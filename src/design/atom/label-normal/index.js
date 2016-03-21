import createLabel from '../label';
import FontNormalBehaviour from '../../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (engine, skin) => (props) => {
  const {h} = engine;

  const Label = createLabel(engine, skin);

  const FontNormal = FontNormalBehaviour(engine, skin);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, skin);

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
