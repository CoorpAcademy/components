import {checker, createValidate} from '../../util/validation';
import createLabel from '../label';
import FontNormalBehaviour from '../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../behaviour/color/text-normal';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options) => {
  const {h} = treant;

  const Label = createLabel(treant, options);

  const FontNormal = FontNormalBehaviour(treant, options);
  const ColorTextNormal = ColorTextNormalBehaviour(treant, options);

  const LabelNormal = (props, children) => (
    <FontNormal>
      <ColorTextNormal>
        <Label>
          {children}
        </Label>
      </ColorTextNormal>
    </FontNormal>
  );

  LabelNormal.validate = createValidate(conditions);
  return LabelNormal;
};
