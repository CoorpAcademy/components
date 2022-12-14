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
      <path fill="none" d="M0 .003h24v24H0z" />
      <path
        fill="currentColor"
        d="M12 2.001c-5.514 0-10 4.485-10 10 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10zm3.293 9.707L13 9.416v8.586h-2V9.416l-2.293 2.293-1.414-1.414L12 5.587l4.707 4.707-1.414 1.414z"
      />
    </svg>
  );
};

export default SvgComponent;
