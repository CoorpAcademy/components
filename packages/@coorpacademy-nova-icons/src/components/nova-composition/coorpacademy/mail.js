import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(!ariaLabel &&
      !alt && {
        'aria-hidden': 'true'
      })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" {...props}>
      <path d="M226.462 349.538l25.846-25.846L528 560l275.692-236.308 25.846 25.846L528 608 226.462 349.538zM192.115 256C156.705 256 128 284.624 128 319.81v384.38c0 35.241 28.472 63.81 64.115 63.81h671.77c35.41 0 64.115-28.624 64.115-63.81V319.81c0-35.241-28.472-63.81-64.115-63.81h-671.77z" />
    </svg>
  );
};

export default SvgComponent;
