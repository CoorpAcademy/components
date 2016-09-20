import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createLabel from '../label';
import FontTinyBehaviour from '../../behaviour/font/tiny';
import FontUppercaseBehaviour from '../../behaviour/font/uppercase';
import FontEmbossedBehaviour from '../../behaviour/font/embossed';
import EllipsisBehaviour from '../../behaviour/font/ellipsis';
import ColorTextNormalBehaviour from '../../behaviour/color/text-normal';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {skin = {}} = options;

  const Label = createLabel(treant, options);

  const FontUppercase = FontUppercaseBehaviour(treant, options);
  const FontEmbossed = FontEmbossedBehaviour(treant, options);
  const FontTiny = FontTinyBehaviour(treant, options);
  const Ellipsis = EllipsisBehaviour(treant, options);
  const ColorTextNormal = ColorTextNormalBehaviour(treant, options);

  const defaultColor = '#123';
  const textColor = getOr(defaultColor, 'texts["mod-tree-label"]', skin);

  const LabelModName = (props, children) => (
    <FontEmbossed>
      <FontUppercase>
        <FontTiny>
          <Ellipsis value={'50px'}>
            <ColorTextNormal
              color={textColor}
            >
              <Label>
                {children}
              </Label>
            </ColorTextNormal>
          </Ellipsis>
        </FontTiny>
      </FontUppercase>
    </FontEmbossed>
  );

  LabelModName.validate = createValidate(conditions);
  return LabelModName;
};
