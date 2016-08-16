import { checker, createValidate } from '../../util/validation';
import {push} from '../../util/navigation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Link = (props, children) => (
    <a
      {...props}
      onClick={push(options, props)}
    >
      {children}
    </a>
  );

  Link.validate = createValidate(conditions);
  return Link;
};
