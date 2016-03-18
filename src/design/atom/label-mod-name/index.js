import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import ColorTextInvertedBehaviour from '../../../behaviour/color/text-inverted';

export default (engine, skin) => (props) => {
  const {h} = engine;

  const Label = createLabel(engine, skin);

  const FontUppercase = FontUppercaseBehaviour(engine, skin);
  const FontTiny = FontTinyBehaviour(engine, skin);
  const ColorTextInverted = ColorTextInvertedBehaviour(engine, skin);

  return (
    <FontUppercase>
      <FontTiny>
        <ColorTextInverted>
          <Label>
            {props.children}
          </Label>
        </ColorTextInverted>
      </FontTiny>
    </FontUppercase>
  );
};
