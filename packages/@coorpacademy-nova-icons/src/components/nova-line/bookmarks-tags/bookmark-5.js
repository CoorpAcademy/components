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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M16.95 21.193a1 1 0 01-1.414 0L12 17.657l-3.535 3.536a1 1 0 01-1.707-.708V3.515c0-.553.447-1 1-1h8.485c.553 0 1 .447 1 1v16.97m-8.486-2.414l2.536-2.535a1 1 0 011.414 0l2.536 2.535V4.515H8.757V18.07z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
