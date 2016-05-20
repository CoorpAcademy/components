import { validate, checker } from '../../../util/validation';
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

  if (process.env.NODE_ENV !== 'production') {
    Title.validate = validate(conditions);
    Title.fixtures = fixtures;
  }

  return Title;
};
