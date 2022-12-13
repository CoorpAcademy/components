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
        <path fill="currentColor" d="M7 20l-3-3 6.9-7L4 3l3-3 9.8 10z" id="prefix__arrow_right" />
      </g>
    </svg>
  );
};

export default SvgComponent;
