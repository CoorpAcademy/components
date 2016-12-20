import React from 'react';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import pushToHistory from '../../util/navigation';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    href: checker.string.optional
  }),
  children: checker.array.optional
});

const Link = ({children, ...props}, context) => {
  const {history: {createHref = identity} = {}} = context;
  const onClick = pushToHistory(context);

  return (
    <a
      {...props}
      href={props.href ? createHref(props.href) : undefined}
      onClick={onClick(props)}
      style={props.href ? null : {
        pointerEvents: 'none'
      }}
    >
      {children}
    </a>
  );
};

Link.validate = createValidate(conditions);
export default Link;
