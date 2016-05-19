import { spec, validate, check } from '../../../util/proptypes-checker';
import fixtures from './fixtures';
import createLabel from '../label';
import FontTinyBehaviour from '../../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../../behaviour/font/uppercase';
import FontEmbossedBehaviour from '../../../behaviour/font/embossed';
import EllipsisBehaviour from '../../../behaviour/font/ellipsis';
import ColorTextNormalBehaviour from '../../../behaviour/color/text-normal';

const conditions = {
  props: null,
  children: spec({
  })
};

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin} = options;

  const Label = createLabel(engine, options);

  const FontUppercase = FontUppercaseBehaviour(engine, options);
  const FontEmbossed = FontEmbossedBehaviour(engine, options);
  const FontTiny = FontTinyBehaviour(engine, options);
  const Ellipsis = EllipsisBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

  const LabelModName = (props, children) => (
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

  if (process.env.NODE_ENV !== 'production') {
    LabelModName.validate = validate(conditions);
    LabelModName.fixtures = fixtures;
  }

  return LabelModName;
};
