import createLabel from '../label';
import FontNormalBehaviour from '../../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (renderer, skin) => (props) => {
  const {h} = renderer;

  const FontNormal = FontNormalBehaviour(renderer, skin);
  const ColorTextNormal = ColorTextNormalBehaviour(renderer, skin);

  return (
    <FontNormal>
      <ColorTextNormal>
        <Label>
          {props.children}
        </Label>
      </ColorTextNormal>
    <FontNormal>
  );
};
