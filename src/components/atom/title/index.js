import { checker, createValidate } from '../../../util/validation';
import fixtures from './fixtures';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (engine, options) => {
  const {h} = engine;
  const Title = (props, children) => (
    <h1>
      {children}
    </h1>
  );

  Title.validate = createValidate(conditions);
  return Title;
};
