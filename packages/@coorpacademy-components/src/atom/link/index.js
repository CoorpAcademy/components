import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import pushToHistory from '../../util/navigation';

const Link = ({children, ...props}, context) => {
  const {history: {createHref = identity} = {}} = context;
  const onClick = pushToHistory(context);
  const _style = props.href ? null : {
    pointerEvents: 'none'
  };

  return (
    <a
      {...props}
      href={props.href ? createHref(props.href) : undefined}
      onClick={onClick(props)}
      style={{
        ...props.style,
        ..._style
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};

Link.contextTypes = {
  history: PropTypes.shape({
    createHref: PropTypes.func,
    push: PropTypes.func
  })
};

export default Link;
