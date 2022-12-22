import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt} = _props;
  const props = {
    ..._props,
    ...(ariaLabel || alt
      ? {
          role: 'img'
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x={15.758}
        y={2.133}
        width={3.016}
        height={10.054}
        rx={0.5}
        transform="rotate(-45 15.758 2.133)"
        fill="currentColor"
      />
      <rect
        y={17.891}
        width={3.016}
        height={10.054}
        rx={0.5}
        transform="rotate(-45 0 17.89)"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.726 5.21a1 1 0 010-1.415l1.547-1.548a1 1 0 011.415 0l8.064 8.065a1 1 0 010 1.414l-1.548 1.548a1 1 0 01-1.414 0l-2.847-2.847-6.517 6.516 2.848 2.847a1 1 0 010 1.415l-1.548 1.547a1 1 0 01-1.414 0l-8.065-8.064a1 1 0 010-1.414l1.548-1.548a1 1 0 011.414 0l2.848 2.847 6.516-6.516-2.847-2.848z"
        fill="currentColor"
      />
      <path
        d="M1.301 22.036a.5.5 0 010-.707l2.017-2.016 2.37 2.37-2.017 2.015a.5.5 0 01-.707 0l-1.663-1.662zM22.036 1.301a.5.5 0 00-.707 0l-2.016 2.017 2.37 2.37 2.015-2.017a.5.5 0 000-.707l-1.662-1.663z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
