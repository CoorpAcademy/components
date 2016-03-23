import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (engine, skin) => (props) => {
  const {h} = engine;

  const Label = createLabel(engine, skin);

  const FontUppercase = FontUppercaseBehaviour(engine, skin);
  const FontTiny = FontTinyBehaviour(engine, skin);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, skin);

  return (
      <FontUppercase>
        <FontTiny>
          <ColorTextNormal value={
            skin.texts['mod-tree-label']
          }>
            <Label>
              {props.children}
            </Label>
          </ColorTextNormal>
        </FontTiny>
      </FontUppercase>
  );
};
