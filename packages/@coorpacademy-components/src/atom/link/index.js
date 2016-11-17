import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import pushToHistory from '../../util/navigation';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    href: checker.string.optional
  }).strict,
  children: checker.oneOrMore
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {history: {createHref = identity} = {}} = options;
  const onClick = pushToHistory(options);

  const Link = (props, children) => (
    <a
      {...props}
      href={props.href ? createHref(props.href) : undefined}
      onClick={onClick(props)}
      style={props.href ? null : {
        pointerEvents: 'none',
      }}
    >
      {children}
    </a>
  );

  Link.validate = createValidate(conditions);
  return Link;
};
