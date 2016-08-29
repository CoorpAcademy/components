import {checker, createValidate} from '../../util/validation';
import {createNavigationHandler} from '../../util/navigation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options = {}) => {
  const {h} = treant;
  const onClick = createNavigationHandler(options);

  const Link = (props, children) => (
    <a
      {...props}
      onClick={onClick}
    >
      {children}
    </a>
  );

  Link.validate = createValidate(conditions);
  return Link;
};
