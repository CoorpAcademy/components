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
    <svg viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.75 0a2.222 2.222 0 012.203 2.297c-.047.234-.047.469-.047.703h4.969C26.485 3 27 3.516 27 4.125c0 4.36-1.594 7.36-3.703 9.422-2.063 2.015-4.594 3.047-6.469 3.562-1.125.282-1.828 1.22-1.828 2.157S15.797 21 16.734 21H18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H9a1.48 1.48 0 01-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.219c.984 0 1.781-.797 1.781-1.734 0-.938-.75-1.875-1.875-2.157-1.875-.515-4.406-1.547-6.469-3.562C1.546 11.484 0 8.484 0 4.125 0 3.515.469 3 1.125 3h4.922c0-.234 0-.469-.047-.703C5.953 1.03 6.984 0 8.25 0h10.5zM2.25 5.25h.047C2.53 8.39 3.75 10.5 5.25 11.953c1.031 1.031 2.25 1.735 3.422 2.25-1.078-1.875-2.016-4.687-2.438-8.953H2.25zm19.5 6.703c1.5-1.453 2.719-3.562 2.953-6.703H20.72c-.422 4.266-1.36 7.078-2.438 8.953 1.172-.515 2.39-1.219 3.469-2.25z"
        fill="#1D1D2B"
      />
    </svg>
  );
};

export default SvgComponent;
