import { spec, validate, check } from '../../../util/proptypes-checker';

const propTypes = spec({
});

export default (engine, options) => {
  const {h} = engine;
  const Title = (props, children) => (
    <h1>
      {children}
    </h1>
  );

  Title.validate = validate(propTypes);
  return Title;
};
