import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import FontEmbossedBehaviour from '../../../behaviour/font/embossed';
import EllipsisBehaviour from '../../../behaviour/font/ellipsis';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

export default (engine, options) => (props, children) => {
  const {h} = engine;
  const {skin} = options;

  const Label = createLabel(engine, options);

  const FontUppercase = FontUppercaseBehaviour(engine, options);
  const FontEmbossed = FontEmbossedBehaviour(engine, options);
  const FontTiny = FontTinyBehaviour(engine, options);
  const Ellipsis = EllipsisBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

  return (
    <FontEmbossed>
      <FontUppercase>
        <FontTiny>
          <Ellipsis value={'50px'}>
            <ColorTextNormal value={
              skin.texts['mod-tree-label']
            }>
              <Label>
                {children}
              </Label>
            </ColorTextNormal>
          </Ellipsis>
        </FontTiny>
      </FontUppercase>
    </FontEmbossed>
  );
};
