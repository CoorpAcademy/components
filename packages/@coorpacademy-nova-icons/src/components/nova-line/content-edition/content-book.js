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
      <g clipPath="url(#prefix__clip0_258_3075)" fill="currentColor">
        <path d="M12 17a.997.997 0 01-.707-.293L9.586 15H6a1 1 0 01-1-1V5a1 1 0 011-1h4c.266 0 .52.105.707.293L12 5.586l1.293-1.293A1 1 0 0114 4h4a1 1 0 011 1v9a1 1 0 01-1 1h-3.586l-1.707 1.707A.993.993 0 0112 17zm-5-4h3c.266 0 .52.105.707.293L12 14.586l1.293-1.293A1 1 0 0114 13h3V6h-2.586l-1.707 1.707a.999.999 0 01-1.414 0L9.586 6H7v7z" />
        <path d="M12 21a.995.995 0 01-.6-.2L7.666 18H3a1 1 0 01-1-1V6h2v10h4c.217 0 .427.07.6.2l3.4 2.55 3.4-2.55c.173-.13.383-.2.6-.2h4V6h2v11a1 1 0 01-1 1h-4.666L12.6 20.8a.995.995 0 01-.6.2z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_258_3075">
          <path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SvgComponent;
