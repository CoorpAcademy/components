import { spec, validate, check } from '../../../util/proptypes-checker';
import fixtures from './fixtures';
import createLabel from '../label';
import FontNormalBehaviour from '../../behaviour/font/normal';
import ColorTextNormalBehaviour from '../../behaviour/color/text-normal';

const conditions = {
  props: null,
  children: spec({
  })
};

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
