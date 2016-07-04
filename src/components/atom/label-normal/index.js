import { checker, createValidate } from '../../../util/validation';
import createLabel from '../label';
import FontNormalBehaviour from '../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../behaviour/color/text-normal';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (engine, options) => {
  const {h} = engine;

  const Label = createLabel(engine, options);

  const FontNormal = FontNormalBehaviour(engine, options);
  const ColorTextNormal = ColorTextNormalBehaviour(engine, options);

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
