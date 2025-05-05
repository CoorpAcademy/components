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
    <svg viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.547 3.578l2.484.328c.422.094.61.61.282.938L17.53 6.53l.422 2.485c.094.421-.375.75-.797.562L15 8.406l-2.203 1.172A.557.557 0 0112 9.016l.422-2.438-1.781-1.734c-.329-.328-.141-.89.28-.938l2.485-.328 1.078-2.25c.235-.422.797-.422.985 0l1.078 2.25zM12 13h6c.797 0 1.5.703 1.5 1.5v9c0 .844-.703 1.5-1.5 1.5h-6a1.48 1.48 0 01-1.5-1.5v-9c0-.797.656-1.5 1.5-1.5zM1.5 16h6c.797 0 1.5.703 1.5 1.5v6c0 .844-.703 1.5-1.5 1.5h-6A1.48 1.48 0 010 23.5v-6c0-.797.656-1.5 1.5-1.5zM21 20.5c0-.797.656-1.5 1.5-1.5h6c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5h-6a1.48 1.48 0 01-1.5-1.5v-3z"
        fill="#1D1D2B"
      />
    </svg>
  );
};

export default SvgComponent;
