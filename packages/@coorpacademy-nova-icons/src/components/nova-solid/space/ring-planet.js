import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: 'img',
          'aria-label': ariaLabel,
          alt
        }
      : {
          'aria-hidden': 'true'
        })
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <g fill="currentColor">
        <path d="M20.308 3.692c-.231-.23-.655-.506-1.363-.506-.718 0-1.659.309-2.733.859a8.992 8.992 0 011.464.97c.3-.122 1.343-.492 1.571-.262 1.22 1.213-4.434 7.555-5.654 8.777-1.62 1.62-6.279 5.784-8.539 5.784-.663 0-.294-1.031-.045-1.647a8.957 8.957 0 01-.967-1.462c-1.76 3.416-.426 4.608 1.012 4.608 1.161 0 2.898-.792 4.854-2.145A6.858 6.858 0 0012 19a7 7 0 007-7c0-.729-.121-1.427-.329-2.087 1.147-1.652 3.06-4.798 1.637-6.221z" />
        <path d="M12.532 12.47c1.81-1.811 3.383-3.739 4.425-5.411a7 7 0 10-9.913 9.884c1.691-1.044 3.651-2.637 5.488-4.473z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
