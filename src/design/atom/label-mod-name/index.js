import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import ColorTextInvertedBehaviour from '../../../behaviour/color/text-inverted';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const Label = createLabel(renderer, skin);

  const FontUppercase = FontUppercaseBehaviour(renderer, skin);
  const FontTiny = FontTinyBehaviour(renderer, skin);
  const ColorTextInverted = ColorTextInvertedBehaviour(renderer, skin);

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
