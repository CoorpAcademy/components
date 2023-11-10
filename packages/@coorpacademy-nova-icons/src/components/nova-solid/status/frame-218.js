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
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={60} height={60} rx={12} fill="#FCDADA" />
      <path
        d="M30 19.5c.656 0 1.266.375 1.594.938l10.125 17.25c.328.609.328 1.312 0 1.874-.328.61-.938.938-1.594.938h-20.25c-.703 0-1.313-.328-1.64-.938-.329-.562-.329-1.265 0-1.874l10.124-17.25A1.89 1.89 0 0130 19.5zm0 6a1.11 1.11 0 00-1.125 1.125v5.25c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 001.125-1.125v-5.25A1.14 1.14 0 0030 25.5zM31.5 36c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5z"
        fill="#B81400"
      />
    </svg>
  );
};

export default SvgComponent;
