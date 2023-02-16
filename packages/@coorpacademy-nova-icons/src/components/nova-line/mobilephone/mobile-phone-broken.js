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
      <path fill="none" d="M0-.001h24v24H0z" />
      <path
        fill="currentColor"
        d="M23 6h-5l-5 6h3l-3 5 9-7h-4zM8 12l2-1 3 6zM15.977 6.477l-.859-3.907a2.003 2.003 0 00-2.383-1.522L2.967 3.196a1.995 1.995 0 00-1.255.876 1.987 1.987 0 00-.268 1.507l1.504 6.837 1.953-.43-.645-2.93 11.721-2.579zM13.164 3l.43 1.953-9.767 2.15-.43-1.954L13.164 3z"
      />
      <path
        d="M15 16v2H5v-4H3v8c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2v-6h-2zM5 22v-2h10v2H5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SvgComponent;
