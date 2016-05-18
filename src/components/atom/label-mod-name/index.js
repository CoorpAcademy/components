import { spec, validate, check } from '../../../util/proptypes-checker';
import createLabel from '../label';
import FontTinyBehaviour from '../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../behaviour/font/uppercase';
import EllipsisBehaviour from '../../behaviour/font/ellipsis';
import ColorTextNormalBehaviour from '../../behaviour/color/text-normal';

const propTypes = spec({
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin} = options;

  const Label = createLabel(engine, options);

  const FontUppercase = FontUppercaseBehaviour(engine, options);
  const FontTiny = FontTinyBehaviour(engine, options);
  const Ellipsis = EllipsisBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

  const LabelModName = (props, children) => (
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
  );

  LabelModName.validate = validate(propTypes);
  return LabelModName;
};
