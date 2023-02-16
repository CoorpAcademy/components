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
          d="M0 6.5l3-2.9 7 6.9 7-6.9 3 2.9-10 9.9z"
          id="prefix__arrow_down"
        />
      </g>
    </svg>
  );
};

export default SvgComponent;
