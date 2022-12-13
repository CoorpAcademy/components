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
      <path fill="none" d="M-.001 0H24v24.001H-.001z" />
      <g fill="currentColor">
        <path d="M18 14c-.74 0-1.426.215-2.021.566l-1.858-1.86-1.414 1.415 1.859 1.858A3.963 3.963 0 0014 18c0 2.207 1.791 4 4 4a3.95 3.95 0 002.02-.566l-2.727-2.727 1.414-1.414 2.727 2.726c.351-.595.566-1.28.566-2.019a4 4 0 00-4-4zM6 10a3.95 3.95 0 002.02-.566l1.859 1.859 1.414-1.414L9.434 8.02C9.785 7.424 10 6.74 10 6a4 4 0 00-4-4c-.74 0-1.426.214-2.021.566l2.728 2.727-1.414 1.413-2.727-2.727A3.963 3.963 0 002 6c0 2.206 1.791 4 4 4z" />
        <path d="M10.414 15l7.793-7.793L19 8l3-4-2-2-4 3 .793.793L9 13.586l-2.293-2.293-1.414 1.414L6.586 14l-4.293 4.293a.999.999 0 000 1.414l2 2a.999.999 0 001.414 0L10 17.413l1.293 1.293 1.414-1.414L10.414 15z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
