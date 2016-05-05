import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (engine, options) => props => {
  const {h} = engine;
  const {skin} = options;

  const Label = createLabel(engine, options);

  const FontUppercase = FontUppercaseBehaviour(engine, options);
  const FontTiny = FontTinyBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

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
