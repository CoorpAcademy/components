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
      <path fill="none" d="M0 .001h24v24.001H0z" />
      <path
        fill="currentColor"
        d="M21.707 12.293l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 14h2v8h5v-5h4v5h5v-8h2a.999.999 0 00.707-1.707z"
      />
    </svg>
  );
};

export default SvgComponent;
