import * as React from 'react';

const SvgComponent = _props => {
  const {'aria-label': ariaLabel, role, alt, ...rest} = _props;
  const props = {
    ...rest,
    ...(ariaLabel || alt
      ? {
          role: role ?? 'img',
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
        <path d="M22.827 11.456c-.096-.148-1.522-2.282-4.101-3.979l3.97-3.971-1.414-1.414L1.811 21.564l1.414 1.414 5.146-5.146c1.093.341 2.298.554 3.618.554 6.804 0 10.667-5.585 10.828-5.824l.373-.548-.363-.558zm-10.839 4.93a9.873 9.873 0 01-1.968-.204l1.907-1.907c.252.069.515.111.79.111a3 3 0 003-3c0-.274-.042-.538-.111-.79l1.661-1.661a13.848 13.848 0 013.464 3.052c-1.087 1.29-4.182 4.399-8.743 4.399zM4.604 15.942l1.453-1.453a13.823 13.823 0 01-2.812-2.503c1.07-1.336 4.154-4.6 8.744-4.6.378 0 .742.029 1.099.072l1.716-1.716a11.506 11.506 0 00-2.815-.356c-6.816 0-10.678 5.822-10.838 6.07l-.362.558.373.548c.086.129 1.278 1.845 3.442 3.38z" />
      </g>
    </svg>
  );
};

export default SvgComponent;
