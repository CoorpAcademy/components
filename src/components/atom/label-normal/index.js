import { validate, checker } from '../../../util/validation';
import fixtures from './fixtures';
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

  if (process.env.NODE_ENV !== 'production') {
    LabelNormal.validate = validate(conditions);
    LabelNormal.fixtures = fixtures;
  }

  return LabelNormal;
};
