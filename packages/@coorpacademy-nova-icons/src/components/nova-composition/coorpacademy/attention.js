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
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm1.029-8.626h-2.092L10.5 4.5h2.966l-.437 10.874zm.085 1.732c.257.231.386.573.386 1.024 0 .435-.131.774-.394 1.015-.263.237-.635.355-1.115.355-.468 0-.834-.12-1.097-.363-.263-.247-.394-.583-.394-1.007 0-.44.131-.78.394-1.015.257-.237.623-.355 1.097-.355.492 0 .866.115 1.123.346z"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgComponent;
