import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role || 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg
      id="prefix__Calque_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 20 20"
      xmlSpace="preserve"
      {...props}
    >
      <style />
      <g id="prefix__Page-1">
        <path
          fill="currentColor"
          d="M13.9 0l2.9 3-6.9 7 6.9 7-2.9 3L4 10z"
          id="prefix__arrow_left"
        />
      </g>
    </svg>
  );
};

export default SvgComponent;
