import { checker, createValidate } from '../../util/validation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options) => {
  const {h} = treant;
  const Title = (props, children) => (
    <h1>
      {children}
    </h1>
  );

  Title.validate = createValidate(conditions);
  return Title;
};
